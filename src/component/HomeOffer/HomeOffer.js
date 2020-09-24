import React from 'react';
import './HomeOffer.css';
export default function HomeOffer(){
   
    return(
        <div className="info-boxes animation fadeInUp animation-visible" data-animation="fadeInUp" data-animation-daley="100">
        <div className="info-boxes-inner">
            <div className="row">
        
                                                <div className="col-md-4 col-sm-4">
                            <div className="info-box">
                                <div className="icon"><i className="fa fa-money" aria-hidden="true"></i></div><div className="row"><div className="col-xs-12"><h4 className="info-box-heading green">money back</h4></div></div><h6 className="text">30 Days Money Back Guarantee</h6>                                    </div>
                        </div>
                                                        <div className="hidden-md col-lg-4 col-sm-4">
                            <div className="info-box">
                                <div className="icon"><i className="fa fa-truck" aria-hidden="true"></i></div><div className="row"><div className="col-xs-12"><h4 className="info-box-heading green">free shipping</h4></div></div><h6 className="text">Shipping on orders over $99</h6>                                    </div>
                        </div>
                                                        <div className="col-md-4 col-sm-4">
                            <div className="info-box">
                                <div className="icon"><i className="fa fa-sellsy" aria-hidden="true"></i></div><div className="row"><div className="col-xs-12"><h4 className="info-box-heading green">Special Sale</h4></div></div><h6 className="text">Extra $5 off on all items </h6>                                    </div>
                        </div>
                                                
            </div>    
        </div>
    </div>        
    );
}