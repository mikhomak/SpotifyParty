import React from "react";
import './Footer.css'
import {PlayerControls} from "../playerControls/PlayerControls";
import {NowPlaying} from "./nowPlaying/NowPlaying";
import {VolumeControls} from "./volumeControls/VolumeControls";

export const Footer = () => {

    return (
        <div className="Footer">
            <NowPlaying songName='The only exception' artistName='Paramore'
                        diskImageUrl='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20'/>
            <PlayerControls/>
            <VolumeControls/>
        </div>
    );

};
