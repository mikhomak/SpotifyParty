import React from "react";
import {SongModel} from "./songModel/SongModel";
import './QueueSongs.css'
import { Box } from "@chakra-ui/core";

export const QueueSongs = () => {

    return (
        <Box>
            <SongModel name='The only exception' artist="Paramore" position={1}/>
        </Box>
    );
};
