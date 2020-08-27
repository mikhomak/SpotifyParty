import React from "react";
import { CreateParty } from "../../models/createParty/CreateParty";
import { JoinPart } from "../joinParty/JoinParty";
import { Flex , Text} from "@chakra-ui/core";


export const CreatePartyControls = () => {
    return (
        <Flex alignItems='center' flexDirection='column' justifyContent='center'    >
            <CreateParty />
            <Text >OR</Text>
            <JoinPart />
        </Flex>
    );
};
