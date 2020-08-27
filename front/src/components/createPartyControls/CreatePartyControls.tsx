import React from "react";
import { CreateParty } from "../../models/createParty/CreateParty";
import { JoinPart } from "../joinParty/JoinParty";
import { Flex } from "@chakra-ui/core";


export const CreatePartyControls = () => {
    return (
        <Flex alignItems='center' flexDirection='column' justifyContent='center'    >
            <CreateParty />
            <span>OR</span>
            <JoinPart />
        </Flex>
    );
};
