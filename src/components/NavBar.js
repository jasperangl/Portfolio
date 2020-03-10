import React from 'react';
import './NavBar.css';

function NavBar() {
    return(
    <header className="navbar-header">
      <img class='logo' src="images/boat.svg" alt='logo'/> 
      <nav>
        <ul className="navbar-ul" class="nav_links">
          <li className="navbar-li"><a href='/'>Home</a></li>
          <li className="navbar-li"><a href='/Recipes'>Recipes</a></li>
          <li className="navbar-li"><a href='/About'>About</a></li>
          <li className="navbar-li"><a class="/Contact" href='/Contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
    );
}

export default NavBar;