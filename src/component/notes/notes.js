import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './notes.css';
import { connect } from 'react-redux';
import { addNotes } from '../../redux';
import NotesList from './notesList';
import AddNotesForm from './addNotesForm';

const Notes = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAddInputView, setAddInputView] = useState(false);

  let notesData = [...props.notesList.notes];
  const handleNotesSubmit = (event) => {
    event.preventDefault();
    setTitle('');
    setDescription('');
    let note = { title, description };
    notesData.push(note);
    props.addNotes(notesData);
  };

  const onDeleteNote = (index) => {
    notesData.splice(index, 1);
    props.addNotes(notesData);
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
          <NotesList renderNotesList={props.notesList.notes} deleteNote={onDeleteNote} />
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

const mapStateToProps = state => {
  return {
    notesList: state.notes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNotes: (notes) => dispatch(addNotes(notes))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes)