import React from 'react';

// Importing the style file
import '../css/AddNote.css';

// Creating the AddNote component
const AddNote = () => {
    return (
        <div className='note new'>
            <textarea cols="30" rows="8" placeholder='Type to add a note'></textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
};

export default AddNote