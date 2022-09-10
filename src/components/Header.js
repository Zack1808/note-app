import React from 'react';

// Importing the style file
import '../css/Header.css';

// Creating the Header component
const Header = () => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button className='save'>Toggle Dark Mode</button>
        </div>
    )
}

export default Header;