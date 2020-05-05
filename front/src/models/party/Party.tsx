import React from "react";
import {Card} from "../../components/card/Card";
import './Party.css';
import {QueueCards} from "../../components/queueCards/QueueCards";

interface PartyProps {

}

interface PartyState {

}

export class Party extends React.Component<PartyProps, PartyState> {

    render() {

        return (
            <div className='Party'>
                <QueueCards/>
            </div>
        );
    }
}
