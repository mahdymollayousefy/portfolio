import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export default function Footer() {
  const [serverStatus, setServerStatus] = useState('Checking...');
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
        const res = await fetch(`${apiUrl}/status/`);
        if (res.ok) { setServerStatus('Systems Online'); setIsOnline(true); } 
        else throw new Error('API down');
      } catch (error) { setServerStatus('Systems Offline'); setIsOnline(false); }
    };
    checkStatus();
  }, []);

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Mahdy.</p>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800">
          <Activity className="w-4 h-4" />
          <span className={`font-semibold flex items-center gap-1.5 ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
            {serverStatus}
          </span>
        </div>
      </div>
    </footer>
  );
}
