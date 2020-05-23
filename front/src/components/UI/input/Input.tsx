import React from "react";
import './Input.css';


interface InputProps {
    placeholder?: String;
    onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export const Input: React.FC<InputProps> = (props) => {

    const placeholder: string = props.placeholder !== null ? props.placeholder!.toString() : '';

    return (
        <input className="Input" placeholder={placeholder} onChange={props.onChangeEvent}/>
    );
};
