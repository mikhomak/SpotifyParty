import React from "react";
import './Party.css';
import { QueueSongs } from "../../components/queueSongs/QueueSongs";
import { PassCounter } from "../../components/passCounter/PassCounter";
import { PartyControls } from "../../components/partyControls/PartyControls";
import { MembersList } from "../../components/membersList/MembersList";
import { Box, Flex } from "@chakra-ui/core";



export const Party = () => {


    return (
        <Flex p='7%' alignItems='center' justifyContent='center' flexDirection='column'>
            <QueueSongs />
            <Flex align='center' justifyContent='space-between' w='100%'>
                <MembersList />
            </Flex>
        </Flex>
    );
}
