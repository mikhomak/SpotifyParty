import React from "react";
import { NavbarItem } from "./navbarItem/NavbarItem";
import './Navbar.css'
import { Box } from '@chakra-ui/core'

export const Navbar = () => {
    return (
        <Box gridColumn='1' gridRow='span 6' background='green'>
            <NavbarItem name="current party" url="/party/" />
            <NavbarItem name="join party" url="/join" />
            <NavbarItem name="create party" url="/create" />
            <NavbarItem name="about" url="/about" />
        </Box>
    );
};
