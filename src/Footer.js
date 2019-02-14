import React from 'react';
import GenreBar from './GenreBar'
import ConsoleBar from './ConsoleBar'
import LuckyBar from './LuckyBar'
import SearchBar from './SearchBar'
import MultiBar from './MultiBar'
import './button.css';

import './Footer.css'

export default function Footer(props) {
    return (
        <div className='footer'>
            <SearchBar />
            <ConsoleBar {...props}/>
            <GenreBar {...props} />
            <MultiBar />
            <LuckyBar />
        </div>
    )
}