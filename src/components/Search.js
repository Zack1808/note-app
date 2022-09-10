import React from 'react';
import {MdSearch} from 'react-icons/md'

// Importing the style file
import '../css/Search.css';

// Creating the Search comopnent
const Search = () => {
    return(
        <div className="search">
            <MdSearch className="search-icons" size="1.3em" />
            <input type="text" placeholder='Type to search' />
        </div>
    )
}

export default Search