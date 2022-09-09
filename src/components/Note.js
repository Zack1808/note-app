import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

// Importing the style file
import '../css/Note.css';

// Creating the Note component
const Note = ({ id, text, date}) => {
    return (
        <div className="note" >
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' />
            </div>
        </div>
    )
}

export default Note; 