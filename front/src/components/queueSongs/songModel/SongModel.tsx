import React from "react";
import './SongModel.css';
import { Box, Image, FormLabel, Icon } from "@chakra-ui/core";

interface SongModelProps {
    name: string;
    artist: string;
    position: number;
}

export const SongModel: React.FC<SongModelProps> = (props) => {

    return (
        <Box d='flex' flexDirection='column' maxW='300px' >
            <Box ml={1} w='100%' display="flex" alignItems='center' justifyContent='space-between' >
                <FormLabel color='tomato'>1<Icon name='arrow-down'/></FormLabel>
                <FormLabel >3<Icon name='arrow-up-down'/></FormLabel>
                <FormLabel color='Green'>2<Icon name='arrow-up'/></FormLabel>
            </Box>
            <Image size='300' src='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' />
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <FormLabel>{props.name}</FormLabel>
                <FormLabel>{props.artist}</FormLabel>
            </Box>
        </Box>
    );
};
