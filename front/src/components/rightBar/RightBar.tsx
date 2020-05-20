import React from 'react';
import './RightBar.css';
import { TopParty } from './topParty/TopParty';

export const RightBar = () => {

    return (
        <div className='RightBar'>
            <ol>
                <TopParty views={1001} name='Best Party ever' currentSong='The Only Exception' id='1' />
                <TopParty views={30} name='Best Party ever' currentSong='The Only Exception' id='2' />
                <TopParty views={30} name='Best Party ever' currentSong='The Only Exception' id='3' />
                <TopParty views={30} name='Not the best Party ever' currentSong='The Only Exception' id='4' />
            </ol>
        </div>
    );
};