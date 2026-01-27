import './App.css'; // Make sure this path is correct
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Task Planner & Motivator</h1>
      <TaskForm />
      <hr />
      <TaskList />
    </main>
  );
}

export default App;