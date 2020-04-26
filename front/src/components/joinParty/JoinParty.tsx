import React from "react";
import {Button} from "../UI/button/Button";

export const JoinPart = () => {

    return (
        <div>
            <input type="text"/>
            <Button name="join" actionEvent={doSomething}/>
        </div>
    );

    function doSomething() {

    }
};
