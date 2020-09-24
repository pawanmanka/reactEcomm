import React from 'react';
import './Shop.css';
import ShopSideBar from './ShopSideBar/ShopSideBar';
import ShopMainContent from './ShopMainContent/ShopMainContent';
export default function Shop()
{
    return(
        <div className="row">
            <ShopSideBar/>
            <ShopMainContent/>
        </div>
    );
}
