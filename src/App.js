import React from "react";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import GlobalStyles from "./globalStyles";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./style.css";

function App() {
  return (
   <Router>
       <GlobalStyles/>
       <Navbar/>
       <Switch>
           <Route path={"/"} exact component={HomePage}/>
       </Switch>
       <Footer/>
   </Router>
  );
}

export default App;
