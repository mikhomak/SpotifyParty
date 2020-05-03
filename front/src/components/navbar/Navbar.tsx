import React from "react";
import {NavbarItem} from "./navbarItem/NavbarItem";
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="Navbar">
            <NavbarItem name="about" url="/about"/>
            <NavbarItem name="create party" url="/create"/>
            <NavbarItem name="join party" url="/join"/>
        </div>
    );
};
