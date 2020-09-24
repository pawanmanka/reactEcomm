import React from 'react';
import './ShopSideBar.css';

import Categories from '../../categories/Categories';
export default function ShopSideBar(){
       
    return(
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar">
           <Categories/>
       </div>
    );
}