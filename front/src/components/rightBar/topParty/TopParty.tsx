import React from 'react';
import './TopParty.css';

interface TopPartyProps {
    views: number;
    name: string;
    currentSong: string;
}


export const TopParty: React.FC<TopPartyProps> = (props) => {

    return (
        <div className='TopParty'>
            <div className='FirstRow'>
                <span>{props.name}</span> <br />
            </div>
            <div className='SecondRow'>
                <span>{props.views}</span> &nbsp;
                <span>{props.currentSong}</span>
            </div>
        </div>
    );
};