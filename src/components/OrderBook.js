import React from "react";

import "../styles/components/orderBook.css";

const OrderBook = () => {
    return (
        <div>
            <span>Emir Defteri</span>
            <div className='order-table'>
                <div className='table-header'>
                    <span>Fiyat (TRY)</span>
                    <span>Miktar (TRY)</span>
                    <span>Toplam</span>
                </div>
                <div className='table-buy-orders'></div>
                <div className='table-last-trade-info'>
                    <span>Son İşlem</span>
                    <span>... (TRY)</span>
                    <span>% Değişim</span>
                </div>
                <div className='table-sell-orders'></div>
            </div>
        </div>
    );
};

export default OrderBook;
