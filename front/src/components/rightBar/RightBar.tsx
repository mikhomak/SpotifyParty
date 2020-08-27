import React from 'react';
import './RightBar.css';
import { TopParty } from './topParty/TopParty';
import { Box , List } from '@chakra-ui/core'

export const RightBar = () => {

    return (
        <Box gridColumn='7' gridRow='span 6' backgroundColor='black' >
            <List>
                <TopParty views={1001} name='Best Party ever' currentSong='The Only Exception' id='1' />
                <TopParty views={30} name='Best Party ever' currentSong='The Only Exception' id='2' />
                <TopParty views={30} name='Best Party ever' currentSong='The Only Exception' id='3' />
                <TopParty views={30} name='Not the best Party ever' currentSong='The Only Exception' id='4' />
            </List>
        </Box>
    );
};