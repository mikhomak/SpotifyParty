import React from "react";
import './Party.css';
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";

interface PartyProps {

}

interface PartyState {
    skiping: boolean;
}

export class Party extends React.Component<PartyProps, PartyState> {


    toggleSkiping() {
        this.setState{skiping: !this.state.skiping};
    }

    render() {

        return (
            <div className='Party'>
                <div className='TopPart'>
                    <QueueSongs />
                </div>
                <div className='BottomPart'>
                    <MembersList />
                    <PartyControls toggleSkiping={this.toggleSkiping} />
                    <div></div>
                </div>
            </div>
        );
    }
}
