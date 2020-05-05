import React from "react";
import {NavbarItem} from "./navbarItem/NavbarItem";
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="Navbar">
            <NavbarItem name="current party" url="/current"/>
            <NavbarItem name="join party" url="/join"/>
            <NavbarItem name="create party" url="/create"/>
            <NavbarItem name="about" url="/about"/>
        </div>
    );
};
