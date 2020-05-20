import React from 'react';
import './TopParty.css';
import { Link } from 'react-router-dom'


interface TopPartyProps {
    views: number;
    name: string;
    currentSong: string;
    id: string;
}


export const TopParty: React.FC<TopPartyProps> = (props) => {

    const views: string = props.views >= 1000 ? (Math.floor(props.views / 1000)).toString() + 'K' : props.views.toString();
    const link: string = "/party/" + props.id;

    return (
        <li className='TopParty'>
            <Link className='Link' to={link} >
                <div className='FirstRow'>
                    <span>{props.name}</span> <br />
                </div>
                <div className='SecondRow'>
                    <span>{views}</span> - &nbsp;
                    <span>{props.currentSong}</span>
                </div>
            </Link>
        </li>
    );
};