import React from "react";
import './SongModel.css';
import { Box, Image, FormLabel, Icon, Button } from "@chakra-ui/core";

interface SongModelProps {
    name: string;
    artist: string;
    position: number;
}

export const SongModel: React.FC<SongModelProps> = (props) => {

    return (
        <Box >
            <Box ml={1} w='100%' display="flex" alignItems='center' justifyContent='space-between' >
                <FormLabel color='tomato'>
                    <Button variant='ghost'>
                        1<Icon name='arrow-down' />
                    </Button>
                </FormLabel>
                <FormLabel >
                    <Button variant='ghost' _hover={{color:'black', background:'white'}}>
                        3<Icon name='arrow-up-down' />
                    </Button> 
                </FormLabel>
                <FormLabel color='Green'>
                    <Button variant='ghost' >
                        2<Icon name='arrow-up' />
                    </Button>
                </FormLabel>
            </Box>
            <Image size='300' src='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' />
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <FormLabel>{props.name}</FormLabel>
                <FormLabel>{props.artist}</FormLabel>
            </Box>
        </Box >
    );
};
