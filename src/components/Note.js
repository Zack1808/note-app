import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

// Importing the style file
import '../css/Note.css';

// Creating the Note component
const Note = () => {
    return (
        <div className="note">
            <span>Hello! First Note!</span>
            <div className="note-footer">
                <small>13/05/2022</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}

export default Note; 