import React, { useState } from 'react';
import { db } from '../db';

const TaskForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const addTask = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!description || !deadline) return;
    if (new Date(deadline) < new Date()) {
      alert("Deadline must be a future date.");
      return;
    }

    try {
      await db.tasks.add({
        description,
        deadline,
      });
      // Reset form after successful addition
      setDescription('');
      setDeadline('');
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };

  return (
    <section>
      <h3>Add New Task</h3>
      <form onSubmit={addTask} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="task" style={{ fontWeight: 'bold', textAlign: 'left' }}>Task Description</label>
          <input
            id="task"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What needs to be done?"
            required
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#1e1e1e', color: 'white' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="deadline" style={{ fontWeight: 'bold', textAlign: 'left' }}>Deadline Date</label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #444', background: '#1e1e1e', color: 'white' }}
          />
        </div>

        <button type="submit" className="add-task-btn">Add Task</button>
      </form>
    </section>
  );
};

export default TaskForm;