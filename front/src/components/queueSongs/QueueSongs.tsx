import React from "react";
import {Card} from "../card/Card";
import './QueueSongs.css'

export const QueueSongs = () => {

    return (
        <div className='QueueSongs'>
            <Card name='The only exception' artist="Paramore" position={1}/>
            <Card name='The only exception' artist="Paramore" position={2}/>
            <Card name='The only exception' artist="Paramore" position={3}/>
            <Card name='The only exception' artist="Paramore" position={4}/>
            <Card name='The only exception' artist="Paramore" position={5}/>
            <Card name='The only exception' artist="Paramore" position={6}/>
            <Card name='The only exception' artist="Paramore" position={7}/>
        </div>
    );
};
