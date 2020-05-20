import React from "react";
import './Party.css';
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";

interface PartyProps {

}

interface PartyState {

}

export class Party extends React.Component<PartyProps, PartyState> {

    render() {

        return (
            <div className='Party'>
                <div>
                    <QueueSongs />
                </div>
                <div className='BottomPart'>
                    <MembersList />
                    <PartyControls />
                    <div></div>
                </div>
            </div>
        );
    }
}
