import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Recipes from './pages/Recipe';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import SnakeAI from './pages/project_details/project_detail'
import './App.css';
import './components/Footer.css'
import Switch from 'react-bootstrap/esm/Switch';

class App extends Component {
  render() {
    return ( 
        <div className="App">
          <NavBar />
          <div id="page-body">
              <Switch>
                <Route exact path="/portfolio/Recipes" component={Recipes} exact />
                <Route exact path="/" component={HomePage} exact />
                <Route exact path="/Resume" component={Resume} exact />
                <Route exact path="/portfolio/SnakeAI" component={SnakeAI} exact />
              </Switch>
              
          </div>
          <Footer />
        </div>
    );
  }
}

export default App;