import React from 'react';
import './PartyControls.css';
import { Button } from '../UI/button/Button';

export const PartyControls = () => {



    function f() {

    }


    function s() {

    }


    return (
        <div className='PartyControls'>
            <Button name='Vote for pass' actionEvent={f} />
            <Button name='Add song' actionEvent={s} />
        </div>
    );
};