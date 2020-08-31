import React from 'react';
import './PassCounter.css';
import { Box } from '@chakra-ui/core';

interface PassCounterProps {
    counter: number;
};


export const PassCounter:React.FC<PassCounterProps> = (props) =>{

    return(
        <Box>
            <span>
                Pass?! - &nbsp;   
            </span>
            <span>
                {props.counter}
            </span>
        </Box>
    );
};