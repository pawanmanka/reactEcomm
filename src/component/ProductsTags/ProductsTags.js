import React from 'react';
import './ProductsTags.css';

export default function ProductsTags(){
    return(
        <div className="sidebar-widget product-tag wow fadeInUp">
        <h3 className="section-title">Product tags</h3>
        <div className="sidebar-widget-body outer-top-xs">
          <div className="tag-list"> 
          <a className="item" title="Phone" href="category.html">Phone</a>
           <a className="item active" title="Vest" href="category.html">Vest</a> 
           <a className="item" title="Smartphone" href="category.html">Smartphone</a>
            <a className="item" title="Furniture" href="category.html">Furniture</a> 
            <a className="item" title="T-shirt" href="category.html">T-shirt</a>
             <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> 
             <a className="item" title="Sneaker" href="category.html">Sneaker</a>
              <a className="item" title="Toys" href="category.html">Toys</a>
               <a className="item" title="Rose" href="category.html">Rose</a>
                </div>    
        </div>       
      </div>
    );
}