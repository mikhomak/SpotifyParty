import React from "react";
import { CreatePartyControls } from "../../components/createPartyControls/CreatePartyControls";
import { Button, Box, Radio, RadioGroup, Link } from "@chakra-ui/core";
import { useLocation } from 'react-router-dom'

interface MainProps {

}



export const Main = () => {

    const location = useLocation();
    return (
        <Box w='100%' h='100%' d='f' alignItems='center' justifyContent='center' flexDirection='column'>
            <CreatePartyControls create={location.pathname.endsWith('create')} />
            <Link href='http://localhost:3700/spotifyLogin'>asd</Link>
        </Box>
    );
}
