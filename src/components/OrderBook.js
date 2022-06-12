import React, { useEffect, useState } from "react";

import { registerToStream, stopStream } from "../mocks/stream";
import { throttle } from "../utils/call";

import upChevron from "../assets/up-chevron.svg";
import "../styles/components/orderBook.css";

const MOCK_BTC_PRICE_IN_TRY = 375550.19;

const currencyFormatter = new Intl.NumberFormat({
    style: "currency"
});

const OrderBook = ({ isActive }) => {
    const [streamData, setStreamData] = useState();

    useEffect(() => {
        if (isActive) {
            registerToStream(
                throttle(data => {
                    setStreamData(data);
                }, 750)
            );
        } else {
            stopStream();
        }

        return stopStream;
    }, [isActive]);

    if (!streamData) {
        return <>Loading..</>;
    }

    return (
        <div className='order-book'>
            <div className='order-book-header'>
                <span>Emir Defteri</span>
            </div>
            <div className='order-table'>
                <div className='order-table-header'>
                    <span>Fiyat (TRY)</span>
                    <span>Miktar (BTC)</span>
                    <span>Toplam</span>
                </div>
                <div className='order-table-buy-orders'>
                    {streamData?.["Buy"]
                        ?.sort((x, y) => x.Price - y.Price)
                        ?.map((buyOrders, index) => (
                            <div key={index} className='order-table-row' style={{ background: `linear-gradient(90deg, rgba(255,255,255,1) ${100 - (buyOrders.Amount * 70)?.toFixed()}%, rgba(3,166,109,0.15) ${100 - (buyOrders.Amount * 70)?.toFixed()}%)` }}>
                                <span className='price'>{currencyFormatter.format(buyOrders.Price * MOCK_BTC_PRICE_IN_TRY)}</span>
                                <span className='amount'>{buyOrders.Amount?.toFixed(4)}</span>
                                <span className='total'>{buyOrders.Total?.toFixed(4)}</span>
                            </div>
                        ))}
                </div>
                <div className='order-table-trade-info'>
                    <span className='title'>Son İşlem</span>
                    <span className='price'>375.550,19 TRY</span>
                    <span className='change'>
                        <img src={upChevron} alt='chevron up' />
                        +2.19%
                    </span>
                </div>
                <div className='order-table-sell-orders'>
                    {streamData?.["Sell"]
                        ?.sort((x, y) => x.Price - y.Price)
                        .map((sellOrders, index) => (
                            <div key={index} className='order-table-row' style={{ background: `linear-gradient(90deg, rgba(255,255,255,1) ${100 - (sellOrders.Amount * 70)?.toFixed()}%, rgba(248,73,96,0.15) ${100 - (sellOrders.Amount * 70)?.toFixed()}%)` }}>
                                <span className='price'>{currencyFormatter.format(sellOrders.Price * MOCK_BTC_PRICE_IN_TRY)}</span>
                                <span className='amount'>{sellOrders.Amount?.toFixed(4)}</span>
                                <span className='total'>{sellOrders.Total?.toFixed(4)}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
