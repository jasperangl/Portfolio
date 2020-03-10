import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Recipes from './pages/Recipe';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css';
import './components/Footer.css'

class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/Recipes" component={Recipes} exact />
              <Route path="/" component={HomePage} exact />
              <Route path="/Contact" component={Contact} exact />
              <Route path="/Resume" component={Resume} exact />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;