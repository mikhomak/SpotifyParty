import React from "react";
import {NavbarItem} from "./navbarItem/NavbarItem";
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="Navbar">
            <NavbarItem name="create party" url=""/>
            <NavbarItem name="join party" url=""/>
            <NavbarItem name="about" url=""/>
        </div>
    );
};
