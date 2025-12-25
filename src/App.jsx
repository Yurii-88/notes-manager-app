import { useState } from 'react';
import Task from './components/Task';

export default function App() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const handleStatusChange = () => setIsTaskCompleted((prev) => !prev);

  return (
    <div className='m-3 flex flex-col items-center gap-2'>
      <Task
        title='To learn React and enjoy it'
        description='Learning React is fun and exciting! It gives a completely new perspective on building web applications.'
        isCompleted={isTaskCompleted}
        changeStatus={handleStatusChange}
      />
    </div>
  );
}
