import './App.css'; 
import QuoteDisplay from './components/QuoteDisplay';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';

const OfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => setIsOnline(navigator.onLine);
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return (
    <div style={{
      backgroundColor: isOnline ? '#4CAF50' : '#f44336',
      color: 'white',
      padding: '5px',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      {isOnline ? '● Online' : '⚠ Offline Mode'}
    </div>
  );
};

function App() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Task Planner & Motivator</h1>
      <QuoteDisplay />
      <TaskForm />
      <hr />
      <TaskList />
      <OfflineStatus />
    </main>
  );
}

export default App;