import { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import TaskList from './components/TaskList';
import { tasks as mockTasks } from './data/tasks';

const App = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [isAdding, setIsAdding] = useState(false);

  const handleStatusChange = (taskId) => {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
    setTasks(updatedTasks);
  };

  const updateTasks = (value) => {
    if (!value) {
      setIsAdding(false);

      return;
    }

    setTasks((prev) => [...prev, { ...value, id: prev.length + 1, isCompleted: false }]);
  };

  return (
    <>
      {isAdding && <Form submitForm={updateTasks} />}
      <div className='m-3 flex gap-2 justify-between'>
        <TaskList tasks={tasks} handleStatusChange={handleStatusChange} />
        <Button
          disabled={isAdding}
          label='Add task'
          classes='h-fit hover:bg-green-600 bg-green-500'
          onClick={() => setIsAdding(true)}
        />
      </div>
    </>
  );
};

export default App;
