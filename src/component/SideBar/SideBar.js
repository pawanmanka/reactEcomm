import React from 'react';
import './SideBar.css';

import Categories from '../categories/Categories';
import HotDeals from '../HotDeals/HotDeals';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import ProductsTags from '../ProductsTags/ProductsTags';
export default function SideBar(){
    const mb20 = {
        margin_bottom: '20px',
      };
    return(
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar" style={mb20}>
            <Categories/>
            <HotDeals/>
            <SpecialOffer/>
            <ProductsTags/>
        </div> 
    );
}