import React from 'react';
import './CheckOut.css';
export default function CheckOut(){   
    return(    
		<div className="checkout-box text-align-left">
			<div className="row">
				<div className="col-md-8">
					<div className="panel-group checkout-steps" id="accordion">
					
                        <div className="panel panel-default checkout-step-01">

                            <div className="panel-heading">
                                <h4 className="unicase-checkout-title">
                                    <a data-toggle="collapse" className="" data-parent="#accordion" href="#collapseOne">
                                    <span>1</span>Checkout Method
                                    </a>
                                </h4>
                            </div>
                        
                            <div id="collapseOne" className="panel-collapse collapse in">

                                <div className="panel-body">
                                    <div className="row">	
                            
                                        <div className="col-md-6 col-sm-6 guest-login">
                                            <h4 className="checkout-subtitle">Guest or Register Login</h4>
                                            <p className="text title-tag-line">Register with us for future convenience:</p>

                                            <form className="register-form" role="form">
                                                <div className="radio radio-checkout-unicase">  
                                                    <input id="guest" type="radio" name="text" value="guest" checked/>  
                                                    <label className="radio-button guest-check" for="guest">Checkout as Guest</label>  
                                                    <br/>
                                                    <input id="register" type="radio" name="text" value="register"/>  
                                                    <label className="radio-button" for="register">Register</label>  
                                                </div>  
                                            </form>
                                            
                                            <h4 className="checkout-subtitle outer-top-vs">Register and save time</h4>
                                            <p className="text title-tag-line ">Register with us for future convenience:</p>
                                            
                                            <ul className="text instruction inner-bottom-30">
                                                <li className="save-time-reg">- Fast and easy check out</li>
                                                <li>- Easy access to your order history and status</li>
                                            </ul>

                                            <button type="submit" className="btn-upper btn btn-primary checkout-page-button checkout-continue ">Continue</button>
                                        </div>
                                    
                                        <div className="col-md-6 col-sm-6 already-registered-login">
                                        <h4 className="checkout-subtitle">Already registered?</h4>
                                        <p className="text title-tag-line">Please log in below:</p>
                                        <form className="register-form" role="form">
                                            <div className="form-group">
                                            <label className="info-title" for="exampleInputEmail1">Email Address <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder=""/>
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" for="exampleInputPassword1">Password <span>*</span></label>
                                            <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" placeholder=""/>
                                            <a href="#" className="forgot-password">Forgot your Password?</a>
                                        </div>
                                        <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Login</button>
                                        </form>
                                    </div>	
                                
                                    </div>			
                                </div>
                            </div>
                        </div>

					  	<div className="panel panel-default checkout-step-02">
						    <div className="panel-heading">
						      <h4 className="unicase-checkout-title">
						        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseTwo">
						          <span>2</span>Billing Information
						        </a>
						      </h4>
						    </div>
						    <div id="collapseTwo" className="panel-collapse collapse">
						      <div className="panel-body">
						      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						      </div>
						    </div>
					  	</div>
					  
					  	<div className="panel panel-default checkout-step-03">
						    <div className="panel-heading">
						      <h4 className="unicase-checkout-title">
						        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseThree">
						       		<span>3</span>Shipping Information
						        </a>
						      </h4>
						    </div>
						    <div id="collapseThree" className="panel-collapse collapse">
						      <div className="panel-body">
						      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						      </div>
						    </div>
					  	</div>
					  	
					    <div className="panel panel-default checkout-step-04">
						    <div className="panel-heading">
						      <h4 className="unicase-checkout-title">
						        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseFour">
						        	<span>4</span>Shipping Method
						        </a>
						      </h4>
						    </div>
						    <div id="collapseFour" className="panel-collapse collapse">
							    <div className="panel-body">
							     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							    </div>
					    	</div>
						</div>
						
					  	<div className="panel panel-default checkout-step-05">
						    <div className="panel-heading">
						      <h4 className="unicase-checkout-title">
						        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseFive">
						        	<span>5</span>Payment Information
						        </a>
						      </h4>
						    </div>
						    <div id="collapseFive" className="panel-collapse collapse">
						      <div className="panel-body">
						       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						      </div>
						    </div>
					    </div>
					  
					  	<div className="panel panel-default checkout-step-06">
						    <div className="panel-heading">
						      <h4 className="unicase-checkout-title">
						        <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapseSix">
						        	<span>6</span>Order Review
						        </a>
						      </h4>
						    </div>
					    	<div id="collapseSix" className="panel-collapse collapse">
					      		<div className="panel-body">
					        		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					      		</div>
					    	</div>
					  	</div>
					  
					</div>
				</div>
                <div className="col-md-4">				
                    <div className="checkout-progress-sidebar ">
                        <div className="panel-group">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="unicase-checkout-title">Your Checkout Progress</h4>
                                </div>
                                <div className="">
                                    <ul className="nav nav-checkout-progress list-unstyled">
                                        <li><a href="#">Billing Address</a></li>
                                        <li><a href="#">Shipping Address</a></li>
                                        <li><a href="#">Shipping Method</a></li>
                                        <li><a href="#">Payment Method</a></li>
                                    </ul>		
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
		    </div>
	    </div>         
    );
}