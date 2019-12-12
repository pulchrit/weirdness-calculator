import React from 'react';
import SelectGif from './SelectGif';
import Favorites from './Favorites';
import '../css/MainContent.css';

const MainContent = () => {
    
    return (
        <main>

            <SelectGif />

            <Favorites />

        </main>
    );

}

export default MainContent; 