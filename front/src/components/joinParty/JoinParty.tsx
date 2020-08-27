import React from "react";
import {Input} from "../UI/input/Input";
import './JoinParty.css';
import { Button, Box, Radio, RadioGroup } from "@chakra-ui/core";
import { InputField } from "../UI/inputField/InputFields";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";

export const JoinPart = () => {

    return (
        <Box m='auto' p={1}>
            <Formik
                initialValues={{ name: "" }}
                onSubmit={async (values, { setErrors }) => {
                    
                }}>
                {({ isSubmitting }) => (
                    <Form>
                        <Box w='90%'  d='flex' flexDirection='column' >
                        <InputField name="name" placeholder="enter id..." label="Name of the Party"  />
                        <Button variantColor="green" variant="solid" alignSelf='center' w='50%' >
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
