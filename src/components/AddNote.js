import React, { useState } from 'react';

// Importing the style file
import '../css/AddNote.css';

// Creating the AddNote component
const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState("");
    const charLimit = 200;

    const handleChange = (e) => {
        if(charLimit - e.target.value.length >= 0) setNoteText(e.target.value);
    }

    const handleSave = () => {
        if(noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("")
        }
    }

    return (
        <div className='note new'>
            <textarea value={noteText} onChange={handleChange} cols="30" rows="8" placeholder='Type to add a note'></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
};

export default AddNote