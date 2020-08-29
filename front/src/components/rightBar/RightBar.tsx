import React from 'react';
import './RightBar.css';
import { TopParty } from './topParty/TopParty';
import { Box, List } from '@chakra-ui/core'
import { usePartiesQuery } from "../../generated/graphql";

export const RightBar = () => {


    const parties = usePartiesQuery();
    const topParties = parties[0].data?.parties.map(party => <TopParty views={1} name={party.name} currentSong='sa' id={party.id.toString()} />);
    return (
        <Box gridColumn='7' gridRow='span 8' backgroundColor='black' >
            <List>
                {topParties}
            </List>
        </Box>
    );
};