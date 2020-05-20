import React from 'react';
import './TopParty.css';

interface TopPartyProps {
    views: number;
    name: string;
    currentSong: string;
}


export const TopParty: React.FC<TopPartyProps> = (props) => {

    const views: string = props.views >= 1000 ? (Math.floor(props.views / 1000)).toString() + 'K' : props.views.toString();

    return (
        <div className='TopParty'>
            <div className='FirstRow'>
                <span>{props.name}</span> <br />
            </div>
            <div className='SecondRow'>
                <span>{views}</span> - &nbsp; 
                <span>{props.currentSong}</span>
            </div>
        </div>
    );
};