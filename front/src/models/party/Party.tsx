import React from "react";
import './Party.css';
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";
import { Box } from "@chakra-ui/core";



export const Party = () => {


    function toggleSkiping() {

    }
    return (
        <Box p='7%'>
            <Box>
                <QueueSongs />
            </Box>
            <Box pt='5%' display='flex' alignItems='center' justifyContent='space-between'>
                <MembersList />
                <PartyControls toggleSkiping={toggleSkiping} />
            </Box>
        </Box>
    );
}
