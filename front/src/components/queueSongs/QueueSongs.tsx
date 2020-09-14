import React from "react";
import {SongModel} from "./songModel/SongModel";
import './QueueSongs.css'
import { Box, Flex } from "@chakra-ui/core";

export const QueueSongs = () => {

    return (
        <Flex h='70%' align="center" justifyContent='space-between' w='100%'>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
        </Flex>
    );
};
