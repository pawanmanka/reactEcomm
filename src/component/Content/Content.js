import React from 'react';
import './Content.css';

import Banner from '../Banner/Banner';
import HomeOffer from '../HomeOffer/HomeOffer';
import NewProducts from '../Products/NewProducts/NewProducts';
import WideBanner from '../Banner/WideBanner/WideBanner';
import FeaturedProducts from '../Products/FeaturedProducts/FeaturedProducts';
import NewArrivals from '../Products/NewArrivals/NewArrivals';
export default function Content(){
    const mb20 = {
        marginBottom: '20px',
      };
    return(
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
                <Banner/>
                <HomeOffer/>
                <NewProducts/>
                <WideBanner/>
                <FeaturedProducts/>
                <NewArrivals/>
        </div> 
    );
}