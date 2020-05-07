import React from "react";
import './PlayBar.css';

interface SongLengthProps {
    left: number;
}

export const PlayBar: React.FC<SongLengthProps> = (SongLengthProps) => {

    return (
        <div className="PlayBar">
            <span>
                s
            </span>
                <div>
                </div>
            <span>
                s
            </span>
        </div>
    );
};
