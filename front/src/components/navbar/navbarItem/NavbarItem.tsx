import React from "react";
import './NavbarItem.css';

interface NavbarItemProps {
    name: string;
    url: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    return (
        <a className="NavbarItem" href={props.url}>{props.name}</a>
    );
};
