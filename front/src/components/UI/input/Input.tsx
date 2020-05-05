import React from "react";
import './Input.css';


interface InputProps {
    placeholder?: String;
}


export const Input: React.FC<InputProps> = (props) => {

    const placeholder: string = props.placeholder !== null ? props.placeholder!.toString() : '';

    return (

        <input className="Input" placeholder={placeholder}/>
    );
};
