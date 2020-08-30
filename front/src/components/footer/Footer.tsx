import React from "react";
import { Box } from '@chakra-ui/core'
import SpotifyPlayer from 'react-spotify-web-playback';
import Cookies from 'js-cookie';


export const Footer = () => {

    const token = Cookies.get('token')?.toString() ?? '';

    return (
        <Box gridRow='9' gridColumn='span 7' w='100%'
            backgroundColor='grey'
            justifyContent='space-between' alignItems='center' d='f'>
            <SpotifyPlayer
                token={token}
                uris={['spotify:track:1cxJomd3ccfapPhHuLRNfC']}
                styles={{
                    bgColor: '#282828',
                    color: '#FFFFFF'
                }}
                name='spotifyPartyPlayer'
            />
        </Box>
    );

};
