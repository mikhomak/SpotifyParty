import React from "react";
import {CreateParty} from "../createParty/CreateParty";
import {JoinPart} from "../joinParty/JoinParty";
import './PartyControls.css';

export const PartyControls = () => {
    return (
        <div className="PartyControl">
            <CreateParty/>
            <span>OR</span>
            <JoinPart/>
        </div>
    );
};
