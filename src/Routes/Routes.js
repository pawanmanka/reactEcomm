import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

//ctrl
import Home from '../component/home/Home';
import Categories from '../component/categories/Categories';
import Login from '../component/login/Login';
import Wishlist from '../component/Wishlist/Wishlist';
import Cart from '../component/Cart/Cart';
import CheckOut from '../component/CheckOut/CheckOut';
import ProductComparison from '../component/ProductComparison/ProductComparison';
import Shop from '../component/Shop/Shop';
import Page404 from '../component/Page404/Page404';
function Routes(){
    return(
        <div className="body-content outer-top-xs" id="top-banner-and-menu">
            <div className="container">                                     
                <Switch>      
                    <Route  exact path="/" >
                        <Home/>
                    </Route>    
                    <Route  exact path="/categories" >
                        <Categories/>
                    </Route> 
                    <Route  exact path="/Login" >
                        <Login/>
                    </Route> 
                    <Route exact path='/wishlist'>
                        <Wishlist/>
                    </Route>
                    <Route exact path='/cart'>
                        <Cart/>
                    </Route>
                    <Route exact path='/check-out'>
                        <CheckOut/>
                    </Route>
                    <Route exact path='/product-comparison'>
                        <ProductComparison/>
                    </Route>
                    <Route exact path='/shop-product'>
                        <Shop/>
                    </Route>
                    <Route component={Page404} />

                </Switch>  
            </div> 
        </div>   
    );
}
export default Routes;