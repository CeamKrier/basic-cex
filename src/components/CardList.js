import React from "react";

import Card from "./Card";

import "../styles/component-cardList.css";
import tokenMockList from "../mocks/tokenList.json";

const CardList = () => {
    return (
        <div className='cardList'>
            {tokenMockList.map(token => (
                <Card tokenIconName={token.tokenIconName} tokenName={token.tokenName} tokenTicker={token.tokenTicker} />
            ))}
        </div>
    );
};

export default CardList;
