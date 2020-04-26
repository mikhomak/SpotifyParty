import React from "react";


interface FooterItemProps {
    name: string;
    url: string;
}

export const FooterItem: React.FC<FooterItemProps> = (props) => {

    return (
        <a href={props.url}>{props.name}</a>
    );

};
