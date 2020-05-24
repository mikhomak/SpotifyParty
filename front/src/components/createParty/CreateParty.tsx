import React from "react";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import './CreateParty.css';

interface CreatePartyProps {

}

interface CreatePartyState {
    name?: string;  
    private?: boolean;
}


export class CreateParty extends React.Component<CreatePartyProps, CreatePartyState> {

    constructor(props: CreatePartyProps) {
        super(props);

        this.state = {
            name: ''
        };
        this.saveName=this.saveName.bind(this);
    }

    saveName(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value)
        this.setState({name: e.target.value});
    }

    f(){}

    render() {
        return (
            <div className='CreateParty'>
                <span>Name:</span>
                <Input placeholder='Name of the partty' onChangeEvent={this.saveName}/>
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
