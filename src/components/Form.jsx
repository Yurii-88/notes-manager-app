import { useState } from 'react';
import Button from './Button';

const Form = ({ submitForm }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    if (!event) {
      submitForm(null);

      return;
    }

    event.preventDefault();
    submitForm(form);
    setForm({
      title: '',
      description: '',
    });
  };

  return (
    <dialog open className='m-auto w-80 border p-2 gap-2 rounded-md'>
      <form method='dialog' onSubmit={handleSubmit} className='flex flex-col'>
        <div className='flex flex-col gap-2 mb-4'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            className='p-2 border border-gray-300 rounded'
            value={form.title}
            onChange={handleChange}
          />
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            className='p-2 border border-gray-300 rounded'
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-2 justify-end'>
          <Button classes='self-end bg-gray-400 hover:bg-gray-500' label='Cancel' onClick={() => handleSubmit(null)} />
          <Button
            classes='self-end bg-blue-600 hover:bg-blue-700'
            disabled={!(form.title && form.description)}
            label='Save'
            type='submit'
          />
        </div>
      </form>
    </dialog>
  );
};

export default Form;
