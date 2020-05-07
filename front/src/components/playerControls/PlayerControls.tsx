import React from "react";
import {PlayBar} from "../UI/playBar/PlayBar";
import './PlayerControls.css'

export const PlayerControls = () => {

    return (
        <div className='PlayerControls'>
            <PlayBar left={50.3}/>
        </div>
    );
};
