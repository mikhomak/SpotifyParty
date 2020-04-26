import React from "react";
import './Main.css'
import {Navbar} from "../../components/navbar/Navbar";
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
            <div>
                <Navbar/>
                <CreateParty/>
                <JoinPart/>
            </div>
        );
    };
}
