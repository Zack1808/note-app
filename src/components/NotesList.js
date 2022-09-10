import React from 'react';

// Importing the style file
import '../css/NotesList.css'

// Importing the costume made components
import Note from './Note';
import AddNote from './AddNote';

// Creating the NotesList component
const NotesList = ({ notes, handleAddNote, handleDeleteNote }) =>{
    return (
        <div className='notes-list'>
            {notes.map(note => <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />)}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList;