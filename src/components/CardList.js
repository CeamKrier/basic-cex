import React from "react";

import Card from "./Card";

import "../styles/components/cardList.css";
import tokenMockList from "../mocks/tokenList.json";

const CardList = React.memo(() => {
    console.log("rendering cardlist");
    return (
        <div className='cardList'>
            {tokenMockList.map(token => {
                console.log("token", token);
                return <Card key={token.tokenTicker} tokenIconName={token.tokenIconName} tokenName={token.tokenName} tokenTicker={token.tokenTicker} />;
            })}
        </div>
    );
});

export default CardList;
