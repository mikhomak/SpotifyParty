import React from "react";
import './Button.css';

interface ButtonProps {
    name: string;
    actionEvent: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {

    return (
        <button className="button" onClick={props.actionEvent}>{props.name}</button>
    );
};
