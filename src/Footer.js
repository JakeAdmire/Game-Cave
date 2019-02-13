import React from 'react';
import GenreBar from './GenreBar'
import ConsoleBar from './ConsoleBar'
import LuckyBar from './LuckyBar'
import SearchBar from './SearchBar'
import MultiBar from './MultiBar'
import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <SearchBar />
            <ConsoleBar />
            <GenreBar />
            <MultiBar />
            <LuckyBar />
        </div>
    )
}