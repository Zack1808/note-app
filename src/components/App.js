import React, { useState } from 'react';
import { nanoid as nanoId } from 'nanoid'

// Importing the style file
import '../css/App.css';

// Improting the costume made components
import NotesList from './NotesList';
import Search from './Search';

// Creating the App component
const App = () =>{

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("")

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
            <Search search={search} setSearch={setSearch} />
            <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        </div>
    )
}

export default App;