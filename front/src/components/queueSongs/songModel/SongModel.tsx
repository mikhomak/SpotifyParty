import React from "react";
import './SongModel.css';

interface SongModelProps {
    name: string;
    artist: string;
    position: number;
}

export const SongModel: React.FC<SongModelProps> = (props) => {

    const songModelType: string = props.position === 4 ? "main" : "secondly";
    const songModelTypeBorder: string = props.position === 2 || props.position === 6 ? "border" : "";
    const songModelTypeLast: string = props.position === 1 || props.position === 7 ? "last" : "";

    const songModelImageStyle = songModelType + ' ' + songModelTypeBorder + ' ' + songModelTypeLast;
    return (
        <div className={SongModel + ' ' + songModelImageStyle}>
            <img src='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' alt='s' className={songModelImageStyle}/>
            <div className='label'>
                <span>{props.name}</span><br/>
                <span>{props.artist}</span>
            </div>
        </div>
    );
};
