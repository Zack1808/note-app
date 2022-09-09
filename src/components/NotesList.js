import React from 'react';

// Importing the style file
import '../css/NotesList.css'

// Importing the costume made components
import Note from './Note';
import AddNote from './AddNote';

// Creating the NotesList component
const NotesList = ({ notes }) =>{
    return (
        <div className='notes-list'>
            {notes.map(note => <Note key={note.id} id={note.id} text={note.text} date={note.date} />)}
            <AddNote />
        </div>
    )
}

export default NotesList;