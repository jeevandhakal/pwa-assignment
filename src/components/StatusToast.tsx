import React, { useState, useEffect } from 'react';

const StatusToast: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
      setIsVisible(true);

      // Auto-hide the toast after 4 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`status-toast ${isOnline ? 'online' : 'offline'}`}>
      {isOnline ? '● Back Online' : '⚠ You are Offline'}
    </div>
  );
};

export default StatusToast;