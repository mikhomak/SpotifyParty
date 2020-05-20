import React from 'react';
import './RightBar.css';
import { TopParty } from './topParty/TopParty';

export const RightBar = () => {

    return (
        <div className='RightBar'>
            <ol>
                <li><TopParty views={30} name='Best Party ever' currentSong='The Only Exception' /></li>
                <li><TopParty views={30} name='Best Party ever' currentSong='The Only Exception' /></li>
                <li><TopParty views={1001} name='Best Party ever' currentSong='The Only Exception' /></li>
                <li><TopParty views={30} name='Best Party ever' currentSong='The Only Exception' /></li>
            </ol>
        </div>
    );
};