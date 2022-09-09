import React from 'react';

// Importing the costume made components
import Note from './Note';

// Creating the NotesList component
const NotesList = () =>{
    return (
        <div className='notes-list'>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </div>
    )
}

export default NotesList;