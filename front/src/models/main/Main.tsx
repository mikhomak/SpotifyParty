import React from "react";
import './Main.css'
import {CreatePartyControls} from "../../components/createPartyControls/CreatePartyControls";

interface MainProps {

}

interface MainState {
    name: String;
}

export class Main extends React.Component<MainProps, MainState> {


    render() {
        return (
            <div className={"Main"}>
                <CreatePartyControls/>
            </div>
        );
    };
}
