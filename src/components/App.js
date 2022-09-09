import React from 'react';

// Importing the style file
import '../css/App.css';

// Improting the costume made components
import NotesList from './NotesList';

// Creating the App component
const App = () =>{
    return(
        <div className="container">
            <NotesList />
        </div>
    )
}

export default App;