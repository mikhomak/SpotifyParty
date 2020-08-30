import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { useCreatePartyMutation } from "../../../generated/graphql";
import { toErrorMap } from "../../../utils/toErrorMap";
import { InputField } from "../../UI/inputField/InputFields";
import { Button, Box, Radio, RadioGroup } from "@chakra-ui/core";
import { Redirect } from "react-router-dom";


export const CreateParty = () => {


    const [createdId, setCreatedId] = useState<number | undefined>(-1);
    const [, createParty] = useCreatePartyMutation();

    const redirectUrl = '/party/' + createdId;
    const redirect = createdId !== -1 ? <Redirect to={redirectUrl}/> : null;

    return (
        <Box maxW='sm' w='100%' pb={5} m={1} d='f' justifyContent='center'>
            {redirect}
            <Formik
                initialValues={{ name: "", isPrivate: false }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await createParty(values);
                    if (response.data?.createParty.errors) {
                        setErrors(toErrorMap(response.data.createParty.errors));
                    }else{
                        setCreatedId(response.data?.createParty.party?.id);
                    }
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box  w='100%'  d='flex' flexDirection='column' >
                        <InputField name="name" placeholder="enter name..." label="Name of the Party"  />
                        <RadioGroup mt={5} name='isPrivate' defaultValue="false" w='100%' justifyContent="space-between" display="flex" alignItems="center">
                            <Radio variantColor="green" value="false" >
                                Public
                            </Radio>
                            <Radio variantColor="red" value="true" right='auto'>
                                Private
                            </Radio>
                        </RadioGroup>
                        <Button type='submit' mt={5} variantColor="green" variant="solid" alignSelf='center' w='50%' >
                            Create
                        </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );


};
