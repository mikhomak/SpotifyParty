import React from "react";
import {SongModel} from "../songModel/SongModel";
import './QueueSongs.css'

export const QueueSongs = () => {

    return (
        <div className='QueueSongs'>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
            <SongModel name='The only exception' artist="Paramore" position={2}/>
            <SongModel name='The only exception' artist="Paramore" position={3}/>
            <SongModel name='The only exception' artist="Paramore" position={4}/>
            <SongModel name='The only exception' artist="Paramore" position={5}/>
            <SongModel name='The only exception' artist="Paramore" position={6}/>
            <SongModel name='The only exception' artist="Paramore" position={7}/>
        </div>
    );
};
