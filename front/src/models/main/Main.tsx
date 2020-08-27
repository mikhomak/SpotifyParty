import React from "react";
import {CreatePartyControls} from "../../components/createPartyControls/CreatePartyControls";
import { Button, Box, Radio, RadioGroup } from "@chakra-ui/core";

interface MainProps {

}

interface MainState {
    name: String;
}

export class Main extends React.Component<MainProps, MainState> {


    render() {
        return (
            <Box>
                <CreatePartyControls/>
            </Box>
        );
    };
}
