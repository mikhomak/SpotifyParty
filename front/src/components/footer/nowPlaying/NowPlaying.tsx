import React from "react";
import './NowPlaying.css';

interface NowPlayingProps {
    songName: string;
    artistName: string;
    diskImageUrl: string;
}

export const NowPlaying: React.FC<NowPlayingProps> = (props) => {
    return (
        <div className="NowPlaying">
            <img src={props.diskImageUrl}/>
            <div className='SongInfo'>
                <span className='SongName'>{props.songName}</span><br/>
                <span className='ArtistName'>{props.artistName}</span>
            </div>
        </div>
    );
};
