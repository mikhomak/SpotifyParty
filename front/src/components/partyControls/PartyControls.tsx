import React from 'react';
import './PartyControls.css';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/core';



export const PartyControls = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button variantColor="blue" onClick={onOpen}>
                Open
            </Button>
            <Drawer placement='top' onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent backgroundColor='black'>
                    <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};