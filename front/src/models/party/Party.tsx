import React from "react";
import './Party.css';
import {QueueSongs} from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";

interface PartyProps {

}

interface PartyState {

}

export class Party extends React.Component<PartyProps, PartyState> {

    render() {

        return (
            <div className='Party'>
                <QueueSongs/>
                <PassCounter counter={2}/>
            </div>
        );
    }
}
