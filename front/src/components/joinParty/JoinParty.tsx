import React from "react";
import {Input} from "../UI/input/Input";
import { Button, Box, Radio, RadioGroup } from "@chakra-ui/core";
import { InputField } from "../UI/inputField/InputFields";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";

export const JoinParty = () => {

    return (
        <Box m='auto' p={1} mt={3}>
            <Formik
                initialValues={{ name: "" }}
                onSubmit={async (values, { setErrors }) => {
                    
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box w='100%'  d='flex' flexDirection='column' >
                        <InputField name="id" placeholder="enter id..." label="Join party"  />
                        <Button mt={5} variantColor="green" variant="solid" alignSelf='center' w='50%' >
                            join
                        </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );

    function doSomething() {

    }
};
