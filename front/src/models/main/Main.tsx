import React from "react";
import './Main.css'
import {PartyControls} from "../../components/partyControls/PartyControls";

interface MainProps {

}

interface MainState {
    name: String;
}

export class Main extends React.Component<MainProps, MainState> {


    render() {
        return (
            <div className={"Main"}>
                <PartyControls/>
            </div>
        );
    };
}
