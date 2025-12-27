import { useState } from 'react';
import { tasks as mockTasks } from '../data/tasks';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const handleStatusChange = (taskId) => {
    const updatedTasks = tasks.map((task) => (task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
    setTasks(updatedTasks);
  };

  return (
    <>
      {tasks.map(({ description, id, isCompleted, title }) => (
        <Task
          key={id}
          title={title}
          description={description}
          isCompleted={isCompleted}
          changeStatus={() => handleStatusChange(id)}
        />
      ))}
    </>
  );
};

export default TaskList;
