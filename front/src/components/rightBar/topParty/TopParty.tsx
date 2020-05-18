import React from 'react';
import './TopParty.css';

interface TopPartyProps {
    views: number;
    name: string;
    currentSong: string;
}


export const TopParty:React.FC<TopPartyProps> = (props) => {

    return (
        <div className='TopParty'>
            <span>{props.views}</span> &nbsp;
            <span>{props.name}</span> <br/>
            <span>{props.currentSong}</span>
        </div>
    );
};