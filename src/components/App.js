import React, { useEffect, useState } from 'react';
import { nanoid as nanoId } from 'nanoid'

// Importing the style file
import '../css/App.css';

// Improting the costume made components
import NotesList from './NotesList';
import Search from './Search';
import Header from './Header';

// Creating the App component
const App = () =>{

    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        const darkModeStatus = JSON.parse(localStorage.getItem('react-notes-app-dark'));
        if(savedNotes) setNotes(savedNotes)
        setDarkMode(darkModeStatus)
    }, [])

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
        localStorage.setItem('react-notes-app-dark', JSON.stringify(darkMode));
    }, [notes, darkMode]);

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
        <div className={`${darkMode && "dark-mode"}`}>
            <div className="container">
                <Header handleToggleDarkMode={setDarkMode} />
                <Search search={search} setSearch={setSearch} />
                <NotesList notes={notes.filter(note => note.text.toLowerCase().includes(search.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
            </div>
        </div>
    )
}

export default App;