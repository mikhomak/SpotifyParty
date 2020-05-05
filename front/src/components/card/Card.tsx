import React from "react";
import './Card.css';

interface CardProps {
    name: string;
    artist: string;
    position: number;
}

export const Card: React.FC<CardProps> = (props) => {

    const cardType: string = props.position === 3 ? "main" : "secondly";
    const cardTypeBorder: string = props.position === 1 || props.position === 5 ? "border" : "";

    const cardImageStyle = cardType + ' ' + cardTypeBorder;
    return (
        <div className={Card + ' ' + cardImageStyle}>
            <img src='https://i.scdn.co/image/ab67616d00001e020b73f9c0b28314ae14ad9e20' alt='s' className={cardImageStyle}/>
            <div className='label'>
                <span>{props.name}</span><br/>
                <span>{props.artist}</span>
            </div>
        </div>
    );
};
