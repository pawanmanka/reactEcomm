import React from 'react';
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../services/Firebase';
const uiConfig = {
   
   signInFlow: 'popup',
   signInSuccessUrl: '/signedIn',
  
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID
   ]
 };

export default function Login(){

    return(
    <div className="body-content pad-tb-20">
        <div className="container">
           <div className="sign-in-page">
              <div className="row">
                 <div className="col-md-6 col-sm-6 sign-in">
                    <h4 className=" text-align-left">Sign in</h4>
                    <p className="text-align-left">Hello, Welcome to your account.</p>
                    <div className="social-sign-in outer-top-xs">
                           <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>   
                           { 
                              firebase.auth().onAuthStateChanged(function(user) {
                                 return (user)?"login Success":"not login"
                                 
                                 })
                           }  
                     </div>
                    <form className="register-form outer-top-xs" role="form">
                       <div className="form-group text-align-left">
                          <label className="info-title text-align-left" for="exampleInputEmail1">Email Address <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
                       </div>
                       <div className="form-group text-align-left">
                          <label className="info-title text-align-left" for="exampleInputPassword1">Password <span>*</span></label>
                          <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" />
                       </div>
                       <div className="radio outer-xs text-align-left">
                          <label>
                          <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Remember me!
                          </label>
                          <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
                       </div>
                       <button type="submit" className="btn-upper text-align-left btn btn-primary checkout-page-button">Login</button>
                    </form>
                 </div>
                 <div className="col-md-6 col-sm-6 create-new-account">
                    <h4 className="checkout-subtitle text-align-left">Create a new account</h4>
                    <p className="text title-tag-line text-align-left">Create your new account.</p>
                    <form className="register-form outer-top-xs" role="form">
                       <div className="form-group text-align-left">
                          <label className="info-title " for="exampleInputEmail2">Email Address <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" />
                       </div>
                       <div className="form-group text-align-left">
                          <label className="info-title" for="exampleInputEmail1">Name <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
                       </div>
                       <div className="form-group text-align-left">
                          <label className="info-title" for="exampleInputEmail1">Phone Number <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
                       </div>
                       <div className="form-group text-align-left">
                          <label className="info-title" for="exampleInputEmail1">Password <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" />
                       </div>
                       <div className="form-group text-align-left">
                          <label className="info-title" for="exampleInputEmail1">Confirm Password <span>*</span></label>
                          <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1"/ >
                       </div>
                       <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
                    </form>
                 </div>
              </div>
           </div>
        </div>
     </div> 
    );
}