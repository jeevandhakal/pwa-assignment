import Dexie, { type EntityTable } from 'dexie';

// Define the interface for our Task object
interface Task {
  id?: number;
  description: string;
  deadline: string; // ISO string format
}

// Initialize the database
const db = new Dexie('PWA_Assignment_DB') as Dexie & {
  tasks: EntityTable<Task, 'id'>;
};

// Define the schema
db.version(1).stores({
  tasks: '++id, description, deadline' 
});

export type { Task };
export { db };