import React from "react";
import {Link} from "react-router-dom";
import './FooterItem.css'

interface FooterItemProps {
    name: string;
    url: string;
}

export const FooterItem: React.FC<FooterItemProps> = (props) => {

    return (
        <Link className='FooterItem' to={props.url}>{props.name}</Link>
    );

};
