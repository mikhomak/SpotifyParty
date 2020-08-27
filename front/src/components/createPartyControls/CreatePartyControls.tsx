import React from "react";
import { CreateParty } from "../../models/createParty/CreateParty";
import { JoinPart } from "../joinParty/JoinParty";
import './CreatePartyControls.css';
import { Button, Box, Radio, Flex } from "@chakra-ui/core";


export const CreatePartyControls = () => {
    return (
        <Flex m='20' alignItems='center' flexDirection='column'>
            <CreateParty />
            <span>OR</span>
            <JoinPart />
        </Flex>
    );
};
