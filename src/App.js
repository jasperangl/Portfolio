import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Recipes from './pages/Recipe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import SnakeAI from './pages/project_details/project_detail'
import './App.css';
import './components/Footer.css'

class App extends Component {
  render() {
    return ( 
      <HashRouter basename='/portfolio'>
        <div className="App">
          <NavBar />
          <div id="page-body">
              
              <Route path="/Recipes" component={Recipes} exact />
              <Route path="/" component={HomePage} exact />
              <Route path="/Resume" component={Resume} exact />
              <Route path="/SnakeAI" component={SnakeAI} exact />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;