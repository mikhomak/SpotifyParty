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
        <div className='CreateParty'>


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
                        <InputField name="name" placeholder="enter name..." label="Name of the Party" />
                        <RadioGroup defaultValue="false" spacing={80} isInline alignContent="center">
                            <Radio variantColor="green" value="false">
                                Public
                            </Radio>
                            <Radio variantColor="red" value="true">
                                Private
                            </Radio>
                        </RadioGroup>
                        <Button variantColor="teal" variant="solid">
                            Create
                        </Button>
                    </Form>
                )}
            </Formik>



            {/* <span>Name:</span>
            <Input placeholder='Name of the partty' onChangeEvent={saveName} />
            <span>Public?</span><br />
            <input type='radio' /> Private <br />
            <input type='radio' /> Public<br />
            <div className="Buttons">
                <Button actionEvent={f} name='Create' />
            </div> */}
        </div>
    );


};
