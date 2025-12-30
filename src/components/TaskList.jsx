import Task from './Task';

const TaskList = ({ tasks, handleStatusChange }) => {
  return (
    <div className='w-1/3 m-2 flex flex-col gap-2'>
      {tasks.map(({ description, id, isCompleted, title }) => (
        <Task
          key={id}
          title={title}
          description={description}
          isCompleted={isCompleted}
          changeStatus={() => handleStatusChange(id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
