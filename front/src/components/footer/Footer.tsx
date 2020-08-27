import React from "react";
import { PlayerControls } from "../playerControls/PlayerControls";
import { NowPlaying } from "./nowPlaying/NowPlaying";
import { VolumeControls } from "./volumeControls/VolumeControls";
import { Box } from '@chakra-ui/core'

export const Footer = () => {



    return (
        <Box gridRow='9' gridColumn='span 7' w='100%'
            backgroundColor='grey'
            justifyContent='space-between' alignItems='center' d='f'>
            <NowPlaying songName='The only exception' artistName='Paramore'
                diskImageUrl='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' />
            <PlayerControls />
            <VolumeControls />
        </Box>
    );

};
