import React from "react";
import {CreateParty} from "../../models/createParty/CreateParty";
import {JoinPart} from "../joinParty/JoinParty";
import './CreatePartyControls.css';

export const CreatePartyControls = () => {
    return (
        <div className="CreatePartyControls">
            <CreateParty/>
            <span>OR</span>
            <JoinPart/>
        </div>
    );
};
