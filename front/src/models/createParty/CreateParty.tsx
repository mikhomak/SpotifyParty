import React from "react";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import './CreateParty.css';
import { Formik, Form } from 'formik';
import { useCreatePartyMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/UI/inputField/InputFields";
import { Box, Radio, RadioGroup } from "@chakra-ui/core";

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
                        <RadioGroup defaultValue="2" spacing={5} isInline>
                            <Radio value="1">
                                Radio
                            </Radio>
                            <Radio value="2">
                                Radio
                            </Radio>
                        </RadioGroup>
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
