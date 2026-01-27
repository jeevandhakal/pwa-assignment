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
      <form onSubmit={addTask}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            id="task"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What needs to be done?"
            required
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default TaskForm;