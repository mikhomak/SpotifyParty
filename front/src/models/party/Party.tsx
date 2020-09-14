import React from "react";
import './Party.css';
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";
import { Box, Button, Flex } from "@chakra-ui/core";



export const Party = () => {


    return (
        <Flex h='100%' pl='7%' pr='7%' alignItems='center' justifyContent='center' flexDirection='column'>
            <Box fontSize='50px' mt={5} pb={2}> Name</Box>
            <QueueSongs />
            <Flex pb={5} justifyContent='space-between' align='center' w='100%'>
                <MembersList />
                <PartyControls/>
            </Flex>
        </Flex>
    );
}
