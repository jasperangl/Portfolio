import React from 'react';
import './NavBar.css';
import Logo from "../images/JA-logo-3.png";
import { Link
} from 'react-router-dom';

function NavBar() {
    return(



    <header className="navbar-header">
     <link rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <img className='logo' src={Logo} alt='logo'/> 
        <nav>
          <input type='checkbox' id="chk"></input>
          <input type='checkbox' id="chk2"></input>
          <input type='checkbox' id="chk3"></input>
          <input type='checkbox' id="chk4"></input>
          <label htmlFor='chk' className='open-menu-btn'>
              <i className='fa fa-bars'></i>
          </label>
          
          <ul className="navbar-ul" >
            <li className="navbar-li"><Link to='/'>Home</Link></li>
            <li className="navbar-li"><a htmlFor="chk" aria-hidden="true" href='/portfolio/#About'>About</a></li>
            <li className="navbar-li"><a htmlFor="chk" aria-hidden="true" href='/portfolio/#Projects'>Projects</a></li>
            <li className="navbar-li"><a htmlFor="chk" aria-hidden="true" href='/portfolio/#Contact'>Contact</a></li>
            <label htmlFor="chk" className="close-btn" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </label>
          </ul>
        </nav>
    </header>
    );
}

export default NavBar;