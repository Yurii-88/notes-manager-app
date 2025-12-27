const Task = ({ changeStatus, description, isCompleted, title }) => {
  return (
    <div
      className={`w-84 border-2 rounded-md flex flex-col gap-3 p-4 text-lg ${
        isCompleted ? 'border-green-500' : 'border-indigo-600'
      }`}
    >
      <h2 className='bg-lime-200 p-2 rounded-md font-mono text-justify'>
        <span className='font-bold'>Title:</span> {title}
      </h2>
      <p className='bg-cyan-300 p-2 rounded-md font-mono text-justify'>
        <span className='font-bold'>Description: </span>
        {description}
      </p>
      <button
        className={`px-4 py-2 text-white rounded-md cursor-pointer ${isCompleted ? 'bg-green-500' : 'bg-indigo-600'}`}
        onClick={changeStatus}
      >
        {isCompleted ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default Task;
