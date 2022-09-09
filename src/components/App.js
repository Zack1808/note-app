import React, { useState } from 'react';
import { nanoid as nanoId } from 'nanoid'

// Importing the style file
import '../css/App.css';

// Improting the costume made components
import NotesList from './NotesList';

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

    return(
        <div className="container">
            <NotesList notes={notes} />
        </div>
    )
}

export default App;