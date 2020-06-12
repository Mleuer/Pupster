import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import Navbar from "./components/navbar.js";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={About}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/discover" component={Discover}/>
      <Route exact path="/search" component={Search}/>
    </Router>
  );
}

export default App;
