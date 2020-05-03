import React from "react";
import './NavbarItem.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'


interface NavbarItemProps {
    name: string;
    url: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    return (
        <Link className="NavbarItem" to={props.url}>{props.name}</Link>
    );
};
