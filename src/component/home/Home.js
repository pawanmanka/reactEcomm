import React from 'react';

import Categories from '../categories/Categories';
import HotDeals from '../HotDeals/HotDeals';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
export default function Home(){

    return(
        <div className="row">
            <SideBar/>
            <Content/>
        </div>
    );
}