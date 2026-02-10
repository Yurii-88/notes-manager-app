import { useRef, useState } from 'react';
import FilterPanel from './components/FilterPanel';
import Header from './components/Header';
import NoteForm from './components/NoteForm.jsx';
import NotesList from './components/NotesList.jsx';

const initialFormState = {
  category: '',
  description: '',
  title: '',
};

const App = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [notesToDisplay, setNotesToDisplay] = useState([]);
  const [note, setNote] = useState(initialFormState);

  const dialogRef = useRef(null);
  const filtersRef = useRef({
    searchValue: '',
    categories: [],
  });

  const getLowerCasedValue = value => value.toLowerCase();
  const getFilteredNotes = notes => {
    const { categories, searchValue } = filtersRef.current;

    let filteredNotes = [...notes];

    if (searchValue) {
      filteredNotes = filteredNotes.filter(({ title, description }) =>
        [getLowerCasedValue(title), getLowerCasedValue(description)].some(field =>
          field.includes(getLowerCasedValue(searchValue)),
        ),
      );
    }

    if (categories.length > 0) {
      filteredNotes = filteredNotes.filter(({ category }) => categories.includes(category));
    }

    return filteredNotes;
  };

  const handleInputChange = value => {
    filtersRef.current.searchValue = value;
    setNotesToDisplay(getFilteredNotes(allNotes));
  };

  const handleFilterChange = ({ value, checked }) => {
    const categoriesSet = new Set(filtersRef.current.categories);
    checked ? categoriesSet.add(value) : categoriesSet.delete(value);
    filtersRef.current.categories = [...categoriesSet];
    setNotesToDisplay(getFilteredNotes(allNotes));
  };

  const removeNote = id => {
    const updatedNotes = notes => notes.filter(note => note.id !== id);
    setAllNotes(updatedNotes);
    setNotesToDisplay(updatedNotes);
  };

  const startAddingNote = () => {
    setNote(initialFormState);
    dialogRef.current.showModal();
  };

  const startEditing = note => {
    if (notesToDisplay.findIndex(({ id }) => id === note.id) === -1) {
      return;
    }

    setNote(note);
    dialogRef.current?.showModal();
  };

  const handleEmptyFormSubmit = () => {
    setNote(initialFormState);
    dialogRef.current.close();
  };

  const updateNotes = formValue => {
    if (!formValue) {
      handleEmptyFormSubmit();

      return;
    }

    const isNewNote = allNotes.findIndex(({ id }) => id === formValue.id) === -1;
    const noteToSet = isNewNote ? { ...formValue, id: Date.now() } : formValue;
    setNote(noteToSet);

    const { searchValue, categories } = filtersRef.current;
    const noFiltersApplied = !(searchValue || categories.length);
    const updatedNotes = prev =>
      isNewNote ? [...prev, noteToSet] : prev.map(item => (item.id === formValue.id ? noteToSet : item));
    setAllNotes(updatedNotes);

    if (noFiltersApplied) {
      setNotesToDisplay(updatedNotes);
      dialogRef.current.close();

      return;
    } else {
      setNotesToDisplay(prev => getFilteredNotes([...prev, noteToSet]));
    }

    dialogRef.current.close();
  };

  const handleFormChange = event => {
    const { name, value } = event.target;

    setNote(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='flex flex-col gap-4 m-4 items-center'>
      <Header title='Notes Manager' onInputChange={handleInputChange} startAddingNote={startAddingNote} />
      <FilterPanel onFilterChange={handleFilterChange} />
      <NoteForm dialogRef={dialogRef} note={note} submitForm={updateNotes} handleFormChange={handleFormChange} />
      <NotesList notes={notesToDisplay} startEditing={startEditing} handleRemoving={removeNote} />
    </div>
  );
};

export default App;
