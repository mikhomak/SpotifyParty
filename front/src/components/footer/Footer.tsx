import React, { useEffect } from "react";
import { PlayerControls } from "../playerControls/PlayerControls";
import { NowPlaying } from "./nowPlaying/NowPlaying";
import { VolumeControls } from "./volumeControls/VolumeControls";
import { Box } from '@chakra-ui/core'
import SpotifyPlayer from 'react-spotify-web-playback';
import Cookies from 'js-cookie';
export const Footer = () => {

    const token = Cookies.get('token')!.toString()


    return (
        <Box gridRow='9' gridColumn='span 7' w='100%'
            backgroundColor='grey'
            justifyContent='space-between' alignItems='center' d='f'>
            <SpotifyPlayer
                token={token}
                uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']} 
                styles={{
                    bgColor: '#282828',
                    color: '#FFFFFF'
                }}
            />
        </Box>
    );

};
