import NoteCard from './NoteCard';

const NotesList = ({ notes, startEditing, handleRemoving }) => {
  return (
    <div className='flex flex-col gap-2'>
      {!notes?.length ? (
        <p>No results found.</p>
      ) : (
        notes.map(note => (
          <NoteCard key={note.id} note={note} startEditing={() => startEditing(note)} handleRemoving={handleRemoving} />
        ))
      )}
    </div>
  );
};

export default NotesList;
