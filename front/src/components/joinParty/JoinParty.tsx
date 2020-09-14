import React from "react";
import { Button, Box, Radio, RadioGroup } from "@chakra-ui/core";
import { InputField } from "../UI/inputField/InputFields";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Redirect } from "react-router-dom";

export const JoinParty = () => {

    const [partyId, setJoinPartyId] = useState<number | undefined>(-1);

    const redirectUrl = '/party/' + partyId;
    const redirect = partyId !== -1 ? <Redirect to={redirectUrl}/> : null;

    return (
        <Box m='auto' p={1} mt={3}>
            {redirect}
            <Formik
                initialValues={{ id:'' }}
                onSubmit={async (values, { setErrors }) => {
                    setJoinPartyId(parseInt(values.id))
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box w='100%'  d='flex' flexDirection='column' >
                        <InputField name="id" type='number'  placeholder="enter id..." label="Join party"  />
                        <Button type='submit' mt={5} variantColor="green" variant="solid" alignSelf='center' w='50%' >
                            join
                        </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );


};
