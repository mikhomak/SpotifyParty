import React from "react";
import './SongModel.css';
import { Box, Image, FormLabel } from "@chakra-ui/core";

interface SongModelProps {
    name: string;
    artist: string;
    position: number;
}

export const SongModel: React.FC<SongModelProps> = (props) => {

    const songModelType: string = props.position === 4 ? "main" : "secondly";
    const songModelTypeBorder: string = props.position === 2 || props.position === 6 ? "border" : "";
    const songModelTypeLast: string = props.position === 1 || props.position === 7 ? "last" : "";

    const songModelImageStyle = songModelType + ' ' + songModelTypeBorder + ' ' + songModelTypeLast;
    return (
        <Box w='100%' d='flex' flexDirection='column' >
            <Box d='f' alignItems='center' justifyContent='space-between'>
                <FormLabel>1</FormLabel>
                <FormLabel>2</FormLabel>
            </Box>
            <Image src='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' />
            <Box>
                <FormLabel>{props.name}</FormLabel>
                <FormLabel>{props.artist}</FormLabel>
            </Box>
        </Box>
    );
};
