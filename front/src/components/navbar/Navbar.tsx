import React from "react";
import {NavbarItem} from "./navbarItem/NavbarItem";
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="Navbar">
            <NavbarItem name="create party" url="/create"/>
            <NavbarItem name="join party" url="/join"/>
            <NavbarItem name="about" url="/about"/>
        </div>
    );
};
