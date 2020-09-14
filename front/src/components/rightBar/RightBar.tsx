import React from 'react';
import './RightBar.css';
import { TopParty } from './topParty/TopParty';
import { Box, List } from '@chakra-ui/core'
import { PartiesQuery, PartyResponse, usePartiesQuery } from "../../generated/graphql";
import { UseQueryResponse } from 'urql';

export const RightBar = () => {


    const parties:UseQueryResponse<PartiesQuery> = usePartiesQuery();
    const topParties = parties[0].data?.parties.map(party => <TopParty views={1} name={party.name} currentSong='sa' id={party.id.toString()} key={party.id.toString()} />);
    return (
        <Box gridColumn='7' gridRow='span 8' backgroundColor='black' >
            <List>
                {topParties}
            </List>
        </Box>
    );
};