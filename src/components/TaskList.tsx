import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../db';

const TaskList: React.FC = () => {
  // Automatically updates the UI when the database changes
  const tasks = useLiveQuery(() => db.tasks.toArray());

  const getDeadlineClass = (deadlineStr: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadline = new Date(deadlineStr);
    deadline.setHours(0, 0, 0, 0);

    const diffInDays = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) return 'deadline-passed'; // Red [cite: 26]
    if (diffInDays < 3) return 'deadline-close';  // Orange [cite: 26]
    if (diffInDays <= 7) return 'deadline-approaching'; // Yellow [cite: 26]
    return '';
  };

  const deleteTask = async (id?: number) => {
    if (id) await db.tasks.delete(id); // [cite: 60, 61, 62]
  };

  if (!tasks) return null;

  return (
    <section>
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={getDeadlineClass(task.deadline)} style={{ padding: '10px', marginBottom: '5px', listStyle: 'none', border: '1px solid #ccc' }}>
            <div>
              <strong>{task.description}</strong> (Due: {task.deadline})
            </div>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;