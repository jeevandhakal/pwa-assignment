import './App.css'; 
import QuoteDisplay from './components/QuoteDisplay';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Task Planner & Motivator</h1>
      <QuoteDisplay />
      <TaskForm />
      <hr />
      <TaskList />
    </main>
  );
}

export default App;