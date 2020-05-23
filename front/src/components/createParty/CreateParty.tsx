import React from "react";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import './CreateParty.css';

interface CreatePartyProps {

}

interface CreatePartyState {

}


export class CreateParty extends React.Component<CreatePartyProps, CreatePartyState> {

    f() {

    }

    render() {
        return (
            <div className='CreateParty'>
                <span>Name:</span>
                <Input placeholder='Name of the partty' />
                <span>Public?</span><br />
                <input type='radio' /> Private <br />
                <input type='radio' /> Public<br />
                <div className="Buttons">
                    <Button actionEvent={this.f} name='Create' />
                </div>
            </div>
        );
    };


};
