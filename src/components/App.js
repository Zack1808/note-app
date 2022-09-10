import React, { useState } from 'react';
import { nanoid as nanoId } from 'nanoid'

// Importing the style file
import '../css/App.css';

// Improting the costume made components
import NotesList from './NotesList';
import Search from './Search';

// Creating the App component
const App = () =>{

    const [notes, setNotes] = useState([
        {
            id: nanoId(),
            text: "This is my first note!",
            date: "13/05/2022",
        },
        {
            id: nanoId(),
            text: "This is my second note!",
            date: "14/05/2022",
        }, 
        {
            id: nanoId(),
            text: "This is my third note!",
            date: "15/05/2022",
        },
        {
            id: nanoId(),
            text: "This is my fourth note!",
            date: "16/05/2022",
        },
    ]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoId(),
            text: text,
            date: date.toLocaleDateString(),
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id != id);
        setNotes(newNotes)
    }

    return(
        <div className="container">
            <Search />
            <NotesList notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        </div>
    )
}

export default App;