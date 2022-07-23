import React from 'react';
import '../pages/Search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
const Search = () => {
    return (
        <div>
            <div className="search__input">
                <SearchIcon className="search__inputSearchIcon" />
                <input type="search__searchbar" />
                <MicIcon className='search__inputMicIcon'/>
                
            </div>
        </div>
    );
}

export default Search;
