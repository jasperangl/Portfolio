import React from 'react';
import './NavBar.css';

function NavBar() {
    return(

    <header className="navbar-header">
     <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <img className='logo' src="images/JA-Logo-3.png" alt='logo'/> 
        <nav>
          <input type='checkbox' id="chk"></input>
          <label htmlFor='chk' className='open-menu-btn'>
            <i  className='fa fa-bars'></i>
          </label>
          <ul className="navbar-ul" >
            <li className="navbar-li"><a href='/'>Home</a></li>
            <li className="navbar-li"><a htmlFor="chk" aria-hidden="true" href='/#About'>About</a></li>
            <li className="navbar-li"><a htmlFor="chk" aria-hidden="true" href='/#Projects'>Projects</a></li>
            <li className="navbar-li"><a htmlFor="chk" aria-hidden="true" href='/#Contact'>Contact</a></li>
            <label htmlFor="chk" className="close-btn" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </label>
          </ul>
        </nav>
    </header>
    );
}

export default NavBar;