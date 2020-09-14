import React from 'react';
import './PartyControls.css';
import { PassCounter } from '../passCounter/PassCounter';
import { Box } from '@chakra-ui/core';



export const PartyControls = () => {

    return (
        <Box w='300' >
            <PassCounter counter={5} />
        </Box>
    );
};