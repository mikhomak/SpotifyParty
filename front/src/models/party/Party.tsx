import React from "react";
import './Party.css';
import {QueueSongs} from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";

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
                <PartyControls />
            </div>
        );
    }
}
