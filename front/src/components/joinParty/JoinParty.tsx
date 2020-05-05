import React from "react";
import {Button} from "../UI/button/Button";
import {Input} from "../UI/input/Input";
import './JoinParty.css';

export const JoinPart = () => {

    return (
        <div className='JoinParty'>
            <Input placeholder='party id'/>
            <Button name="join" actionEvent={doSomething}/>
        </div>
    );

    function doSomething() {

    }
};
