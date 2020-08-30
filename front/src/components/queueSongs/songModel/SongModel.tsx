import React from "react";
import './SongModel.css';
import { Box, Image, FormLabel } from "@chakra-ui/core";

interface SongModelProps {
    name: string;
    artist: string;
    position: number;
}

export const SongModel: React.FC<SongModelProps> = (props) => {

    return (
        <Box d='flex' flexDirection='column' maxW='300px' >
            <Box ml={1} w='100%' display="flex" alignItems='center' justifyContent='space-between' >
                <FormLabel>1</FormLabel>
                <FormLabel right='auto'>2</FormLabel>
            </Box>
            <Image size='300' src='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' />
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <FormLabel>{props.name}</FormLabel>
                <FormLabel>{props.artist}</FormLabel>
            </Box>
        </Box>
    );
};
