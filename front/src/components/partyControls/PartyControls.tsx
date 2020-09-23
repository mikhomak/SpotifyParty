import React from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/core';
import { SongModel } from '../queueSongs/songModel/SongModel';
import { InputField } from '../UI/inputField/InputFields';
import { Formik, Form } from 'formik';




export const PartyControls = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button variantColor="green" onClick={onOpen}>
                Add song
            </Button>
            <Drawer placement='top' onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent backgroundColor='grey'>
                    <DrawerHeader borderBottomWidth="1px">
                        <Formik initialValues={{}} onSubmit={() => console.log('pussy pussy')}>
                            <Form>
                                <InputField name="song" placeholder="enter song name..." label="Songname" focusStyle={{backgroundColor:'grey', color:'white'}}/>
                            </Form>
                        </Formik>
                    </DrawerHeader>
                    <DrawerBody>
                        <Flex justifyContent='space-between'>
                            <SongModel name='The only exception' artist="Paramore" position={1} />
                            <SongModel name='The only exception' artist="Paramore" position={1} />
                            <SongModel name='The only exception' artist="Paramore" position={1} />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};