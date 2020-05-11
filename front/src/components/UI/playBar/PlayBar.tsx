import React from "react";
import './PlayBar.css';

interface SongLengthProps {
    currentTime: string;
    maxTime: string;
}

export const PlayBar: React.FC<SongLengthProps> = (props) => {

    return (
        <div className="PlayBar">
            <span>
                {props.currentTime}
            </span>
                <div className='CurrentPlayBar'> `
                </div>
            <span>
                {props.maxTime}
            </span>
        </div>
    );
};
