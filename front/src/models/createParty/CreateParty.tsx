import React from "react";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import './CreateParty.css';
import { Formik } from 'formik';
import { useCreatePartyMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";

interface CreatePartyProps {

}

interface CreatePartyState {

}


export const CreateParty = () => {


    const [,createParty] = useCreatePartyMutation();

    return (
        <div className='CreateParty'>


            <Formik
            initialValues={{name: "", isPrivate: false}}
            onSubmit={async (values,{setErrors})=>{
                const response = await createParty(values);
                if(response.data?.createParty.errors){
                    setErrors(toErrorMap(response.data.createParty.errors));
                }
            }}>

            </Formik>



            <span>Name:</span>
            <Input placeholder='Name of the partty' onChangeEvent={this.saveName} />
            <span>Public?</span><br />
            <input type='radio' /> Private <br />
            <input type='radio' /> Public<br />
            <div className="Buttons">
                <Button actionEvent={this.f} name='Create' />
            </div>
        </div>
    );


};
