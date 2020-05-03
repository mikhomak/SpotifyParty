import React from "react";
import './Main.css'
import {JoinPart} from "../../components/joinParty/JoinParty";
import {CreateParty} from "../../components/createParty/CreateParty";

interface MainProps {

}

interface MainState {
    name: String;
}

export class Main extends React.Component<MainProps, MainState> {


    render() {
        return (
            <div className={"Main"}>
                <div className="PartyControl">
                    <CreateParty/>
                    OR
                    <JoinPart/>
                </div>
            </div>
        );
    };
}
