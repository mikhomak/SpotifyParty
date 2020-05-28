import React from 'react';
import { Button } from '../UI/button/Button';


export const PassControls = () => {

    function pass() {

    }

    function stay() {

    }

    return (
        <div>
            <Button name="stay" actionEvent={stay} />
            <Button name="pass" actionEvent={pass} />
        </div>
    );
};