import { CATEGORIES } from '../constants.js';
import Button from './Button.jsx';

const NoteForm = ({ dialogRef, note, submitForm, handleFormChange }) => {
  const selectOptions = [{ value: '', label: 'Select...' }, ...CATEGORIES];
  const formElementStyles = 'p-2 border border-gray-300 rounded';

  return (
    <dialog ref={dialogRef} className='m-auto w-96 border p-2 gap-2 rounded-md'>
      <form
        method='dialog'
        onSubmit={event => {
          event.preventDefault();
          submitForm(note);
        }}
        className='flex flex-col'
      >
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className={formElementStyles}
            value={note.title}
            onChange={handleFormChange}
          />
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            id='description'
            name='description'
            className={formElementStyles}
            value={note.description}
            onChange={handleFormChange}
          />
          <label htmlFor='description'>Category</label>
          <select
            name='category'
            id='category'
            className={`${formElementStyles} outline-none`}
            value={note.category}
            onChange={handleFormChange}
          >
            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className='flex gap-2 justify-end'>
          <Button
            classes='self-end bg-gray-400 hover:bg-gray-500'
            label='Cancel'
            type='button'
            handleClick={event => {
              event.preventDefault();
              submitForm(null);
            }}
          />
          <Button
            classes='self-end bg-blue-600 hover:bg-blue-700'
            disabled={!note.title.trim() || !note.description.trim() || !note.category.trim()}
            label='Save'
            type='submit'
          />
        </div>
      </form>
    </dialog>
  );
};

export default NoteForm;
