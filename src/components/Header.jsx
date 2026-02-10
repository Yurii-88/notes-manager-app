import Button from './Button.jsx';

const Header = ({ title, onInputChange, startAddingNote }) => {
  return (
    <>
      <h1 className='font-bold text-lg text-lime-500'>{title}</h1>
      <div className='flex w-xl gap-4 p-1 justify-between border border-gray-300 rounded-lg'>
        <input
          className='p-2 flex-4 border-0 outline-none'
          type='text'
          placeholder='Search...'
          onChange={event => onInputChange(event.target.value)}
        />
        <Button label='Add Note' classes='bg-green-500 hover:bg-green-600 flex-1' handleClick={startAddingNote} />
      </div>
    </>
  );
};

export default Header;
