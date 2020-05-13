import React from 'react';
import './PassCounter.css';
interface PassCounterProps {
    counter: number;
};


export const PassCounter:React.FC<PassCounterProps> = (props) =>{

    return(
        <div className='PassCounter'>
            <span>
                Pass?! - &nbsp;   
            </span>
            <span>
                {props.counter}
            </span>
        </div>
    );
};