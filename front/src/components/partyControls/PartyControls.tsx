import React from 'react';
import './PartyControls.css';
import { Button } from '../UI/button/Button';
import { PassCounter } from '../passCounter/PassCounter';

export const PartyControls = () => {



    function f() {

    }


    function s() {

    }


    return (
        <div className='PartyControls'>
            <PassCounter counter={5} />
            <div className='Buttons'>
                <Button name='Vote for pass' actionEvent={f} />
                <Button name='Add song' actionEvent={s} />
            </div>
        </div>
    );
};