import Button from './Button';

const NoteCard = ({ note, startEditing, handleRemoving }) => {
  return (
    <div className='border border-gray-400 h-28 p-2 rounded w-80'>
      <header className='flex justify-between items-center'>
        <h3 className='font-bold'>{note.title}</h3>
        <span className='text-xs bg-gray-100 px-2 py-1 rounded inline-block'>{note.category}</span>
      </header>
      <p className='text-sm'>{note.description}</p>
      <div className='flex justify-end mt-4 gap-2'>
        <Button label='Edit' classes='bg-blue-500 hover:bg-blue-600' handleClick={() => startEditing(note.id)} />
        <Button label='Delete' classes='bg-red-500 hover:bg-red-600' handleClick={() => handleRemoving(note.id)} />
      </div>
    </div>
  );
};

export default NoteCard;
