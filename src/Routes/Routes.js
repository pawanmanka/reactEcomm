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

function Routes(){
    return(
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
        </Switch>      
    );
}
export default Routes;