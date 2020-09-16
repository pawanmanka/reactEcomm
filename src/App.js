import React , { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/navigation/Header';
import Footer from './component/navigation/Footer';
import Routes from './Routes/Routes';
//Data base Connection
import firebase, {db} from './services/Firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

//ctrl
import Home from './component/home/Home';
import Categories from './component/categories/Categories';

class App extends Component {
 
  componentDidMount() {

    db.collection("banner")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        // this.setState({ users: data });
      });
  } 
  render(){
    return (
      <div className="App">     
          <Router>
              <Header/>
                <Routes></Routes>
              <Footer/>
          </Router>      
      </div>
    );
  }
}


export default App;
