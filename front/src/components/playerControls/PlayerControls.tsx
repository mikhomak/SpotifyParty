import React from "react";
import {PlayBar} from "../UI/playBar/PlayBar";
import './PlayerControls.css'

export const PlayerControls = () => {

    return (
        <div className='PlayerControls'>
            <PlayBar currentTime='1:32' maxTime='3:32'/>
        </div>
    );
};
