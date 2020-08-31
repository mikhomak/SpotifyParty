import React from "react";
import './Party.css';
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";
import { Box } from "@chakra-ui/core";



export const Party = () => {


    return (
        <Box p='7%' alignItems='center' justifyContent='center' flexDirection='column'>
            <Box>
                <QueueSongs />
            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifySelf='center' justifyContent='space-between'>
                <MembersList />
                <PartyControls  />
                <Box>asd</Box>
            </Box>
        </Box>
    );
}
