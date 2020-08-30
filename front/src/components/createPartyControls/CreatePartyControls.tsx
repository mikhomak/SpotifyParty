import React from "react";
import { CreateParty } from "./createParty/CreateParty";
import { JoinParty } from "../joinParty/JoinParty";
import { Flex, Text } from "@chakra-ui/core";

interface CreatePartyControlsProps {
    create: boolean;
}


export const CreatePartyControls: React.FC<CreatePartyControlsProps> = (props) => {

    const controls = props.create ? <CreateParty /> : <JoinParty />;

    return (
        <Flex alignItems='center' flexDirection='column' justifyContent='center'    >
            {controls}
        </Flex>
    );
};
