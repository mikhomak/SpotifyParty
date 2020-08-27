import React from "react";
import './CreateParty.css';
import { Formik, Form } from 'formik';
import { useCreatePartyMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/UI/inputField/InputFields";
import { Button, Box, Radio, RadioGroup } from "@chakra-ui/core";

interface CreatePartyProps {

}

interface CreatePartyState {

}


export const CreateParty = () => {


    const [, createParty] = useCreatePartyMutation();

    function f(): void { };
    function saveName(): void { };

    return (
        <Box maxW='sm' w='100%' p={1} d='f' justifyContent='center'>
            <Formik
                initialValues={{ name: "", isPrivate: false }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await createParty(values);
                    if (response.data?.createParty.errors) {
                        setErrors(toErrorMap(response.data.createParty.errors));
                    }
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box w='100%'  d='flex' flexDirection='column' >
                        <InputField name="name" placeholder="enter name..." label="Name of the Party" />
                        <RadioGroup defaultValue="false"   spacing={95} isInline justifySelf='center'>
                            <Radio variantColor="green" value="false">
                                Public
                            </Radio>
                            <Radio variantColor="red" value="true">
                                Private
                            </Radio>
                        </RadioGroup>
                        <Button variantColor="green" variant="solid" alignSelf='center' w='30%' >
                            Create
                        </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );


};
