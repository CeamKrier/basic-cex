import React from "react";

import Card from "./Card";

import "../styles/components/cardList.css";
import tokenMockList from "../mocks/tokenList.json";

const CardList = React.memo(() => {
    return (
        <div className='cardList'>
            {tokenMockList.map(token => {
                return <Card key={token.tokenTicker} tokenIconName={token.tokenIconName} tokenName={token.tokenName} tokenTicker={token.tokenTicker} />;
            })}
        </div>
    );
});

export default CardList;
