const Task = ({ changeStatus, description, isCompleted, title }) => {
  return (
    <div
      className={`border-2 h-28 rounded-md flex flex-col items-center p-2 text-sm ${
        isCompleted ? 'border-green-500' : 'border-indigo-600'
      }`}
    >
      <div className='w-full p-2 flex items-center gap-2'>
        <input
          type='checkbox'
          className='h-4 w-4 accent-green-400 rounded'
          checked={isCompleted}
          onChange={changeStatus}
        />
        <span className='font-bold'>{title}</span>
      </div>
      <p className='border-indigo-600 p-2 w-full rounded-md font-mono text-justify'>
        <span className='font-bold'>Description: </span>
        {description}
      </p>
    </div>
  );
};

export default Task;
