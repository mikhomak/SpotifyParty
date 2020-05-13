import React from 'react';

interface PassCounterProps {
    counter: number;
};


export const PassCounter:React.FC<PassCounterProps> = (props) =>{

    return(
        <div>
            <span>
                Pass?!
            </span>
            <span>
                {props.counter}
            </span>
        </div>
    );
};