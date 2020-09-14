import React from "react";
import {SongModel} from "./songModel/SongModel";
import './QueueSongs.css'
import { Box, Flex } from "@chakra-ui/core";

export const QueueSongs = () => {

    return (
        <Flex h='70%' align="center" w='100%' >
            <SongModel name='The only exception' artist="Paramore" position={1}/>
            <SongModel name='Die young' artist="Linking Park" position={1}/>
            <SongModel name='Rostov' artist="Basta" position={1}/>
            <SongModel name='Yes' artist="Pink Floyd" position={1}/>
            <SongModel name='Get lucky' artist="Daft Punk" position={1}/>
        </Flex>
    );
};
