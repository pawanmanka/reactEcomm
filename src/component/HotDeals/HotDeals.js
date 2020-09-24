import React from 'react';
import './HotDeals.css';
export default function HotDeals(){

    return(
        <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs text-align-left">
        <h3 className="section-title">hot deals</h3>
        <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">
          <div className="item">
            <div className="products">
              <div className="hot-deal-wrapper">
                <div className="image"> <img src="assets/images/hot-deals/p25.jpg" alt=""/> </div>
                <div className="sale-offer-tag"><span>49%<br/>
                  off</span></div>
                <div className="timing-wrapper">
                  <div className="box-wrapper">
                    <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                  </div>
                  <div className="box-wrapper">
                    <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                  </div>
                  <div className="box-wrapper">
                    <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                  </div>
                  <div className="box-wrapper hidden-md">
                    <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                  </div>
                </div>
              </div>
           
              <div className="product-info text-left m-t-20">
                <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                <div className="rating rateit-small"></div>
                <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
               
              </div>
          
              <div className="cart clearfix animate-effect">
                <div className="action">
                  <div className="add-cart-button btn-group">
                    <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                  </div>
                </div>
              
              </div>
            
            </div>
          </div>
          <div className="item">
            <div className="products">
              <div className="hot-deal-wrapper">
                <div className="image"> <img src="assets/images/hot-deals/p5.jpg" alt=""/> </div>
                <div className="sale-offer-tag"><span>35%<br/>
                  off</span></div>
                <div className="timing-wrapper">
                  <div className="box-wrapper">
                    <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                  </div>
                  <div className="box-wrapper">
                    <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                  </div>
                  <div className="box-wrapper">
                    <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                  </div>
                  <div className="box-wrapper hidden-md">
                    <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                  </div>
                </div>
              </div>
         
              
              <div className="product-info text-left m-t-20">
                <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                <div className="rating rateit-small"></div>
                <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
             
              </div>
          
              <div className="cart clearfix animate-effect">
                <div className="action">
                  <div className="add-cart-button btn-group">
                    <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                  </div>
                </div>
              
              </div>
            
            </div>
          </div>
          <div className="item">
            <div className="products">
              <div className="hot-deal-wrapper">
                <div className="image"> <img src="assets/images/hot-deals/p10.jpg" alt=""/> </div>
                <div className="sale-offer-tag"><span>35%<br/>
                  off</span></div>
                <div className="timing-wrapper">
                  <div className="box-wrapper">
                    <div className="date box"> <span className="key">120</span> <span className="value">Days</span> </div>
                  </div>
                  <div className="box-wrapper">
                    <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                  </div>
                  <div className="box-wrapper">
                    <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                  </div>
                  <div className="box-wrapper hidden-md">
                    <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                  </div>
                </div>
              </div>
           
              
              <div className="product-info text-left m-t-20">
                <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                <div className="rating rateit-small"></div>
                <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
              
              </div>
          
              <div className="cart clearfix animate-effect">
                <div className="action">
                  <div className="add-cart-button btn-group">
                    <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart"></i> </button>
                    <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                  </div>
                </div>
         
              </div>
         
            </div>
          </div>
        </div>
   
      </div>
    );
}