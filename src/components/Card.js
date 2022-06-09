import React from "react";

import "../styles/component-card.css";

const TOKEN_TO_SOURCE = {};

const Card = ({ tokenName, tokenTicker, tokenIconName }) => {
    return (
        <div className='tokenCard'>
            <div className='tokenIcon'>{TOKEN_TO_SOURCE[tokenIconName]}</div>
            <div className='tokenName'>{tokenName}</div>
            <div className='tokenTicker'>{tokenTicker}</div>
        </div>
    );
};

export default Card;
