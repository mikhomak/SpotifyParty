import React from "react";
import {FooterItem} from "./footerItem/FooterItem";
import './Footer.css'
export const Footer = () => {

    return (
        <div className="Footer">
            <FooterItem name="About" url="/about"/>
            <FooterItem name="Contact us" url="/contact"/>
        </div>
    );

};
