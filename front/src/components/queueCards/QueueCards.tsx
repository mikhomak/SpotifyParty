import React from "react";
import {Card} from "../card/Card";
import './QueueCards.css'

export const QueueCards = () => {

    return (
        <div className='QueueCards'>
            <Card name='The only exception' artist="Paramore" position={1}/>
            <Card name='The only exception' artist="Paramore" position={2}/>
            <Card name='The only exception' artist="Paramore" position={3}/>
            <Card name='The only exception' artist="Paramore" position={4}/>
            <Card name='The only exception' artist="Paramore" position={5}/>
        </div>
    );
};
