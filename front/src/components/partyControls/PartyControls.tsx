import React from 'react';
import './PartyControls.css';
import { PassCounter } from '../passCounter/PassCounter';


interface PartyControlsProps{
    toggleSkiping: ()=>void;
}


export const PartyControls:React.FC<PartyControlsProps>= (props) => {



    function f() {

    }


    function s() {

    }


    return (
        <div className='PartyControls'>
            <PassCounter counter={5} />
            <div className='Buttons'>
                {/* <Button name='Vote for pass' actionEvent={props.toggleSkiping} />
                <Button name='Add song' actionEvent={s} /> */}
            </div>
        </div>
    );
};