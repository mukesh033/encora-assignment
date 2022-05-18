import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './notes.css';
import NotesList from './notesList';
import AddNotesForm from './addNotesForm';
import { useSelector, useDispatch } from 'react-redux';
import { updateNotes } from '../../redux/notes/notesSlice';

const Notes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAddInputView, setAddInputView] = useState(false);

  let notesList = useSelector(state => state.notes);
  let notesData = [...notesList.notes];
  const dispatch = useDispatch();

  const handleNotesSubmit = (event) => {
    event.preventDefault();
    setTitle('');
    setDescription('');
    let note = { title, description };
    notesData.push(note);
    dispatch(updateNotes(notesData));
  };

  const onDeleteNote = (index) => {
    notesData.splice(index, 1);
    dispatch(updateNotes(notesData));
  }

  return (
    <>
      <div>
        <Card>
          <Card.Body style={{fontWeight: 'bold', background: "#e8e8e8"}}>
             <h2>G Notes</h2>
          </Card.Body>
        </Card>
        <div className='content-container'>
          <NotesList renderNotesList={notesData} deleteNote={onDeleteNote} />
          <div className='content-wrapper'>
            <div style={{textAlign: "right"}}>
              <Button variant="outline-dark" onClick={() => setAddInputView(true)}>+ Add Note</Button>
            </div>
            {isAddInputView && (
              <AddNotesForm title={title} description={description} setTitle={setTitle} setDescription={setDescription} handleNotesSubmit={handleNotesSubmit} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notes;