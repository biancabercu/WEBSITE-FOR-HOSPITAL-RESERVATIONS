
import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import Navbar from '../Navbar';
import sala1 from './sala1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function Services() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  return (
        <> 

<div className='services'>
  <p>  RESOURCES </p>

  <div class="dropdown"> 
  <button class="btn--medium">Resources</button>
    <div class="dropdown-content">
    <Link
        to='/sala1'
        className='nav-links'
     > sala 1 </Link>
     <Link
        to='/sala2'
        className='nav-links'
     > sala 2 </Link>
     <Link
        to='/sala3'
        className='nav-links'
     > sala 3 </Link>
     <Link
        to='/sala4'
        className='nav-links'
     > sala 4 </Link>
     <Link
        to='/sala5'
        className='nav-links'
     > sala 5 </Link>
     <Link
        to='/sala6'
        className='nav-links'
     > sala 6 </Link>
    </div>
   
    
  
</div>

      <div>
            <button type="button" className="btn--medium">
              <Link to="/login" className="app-navigation-link-item">
                Login
              </Link>
            </button>
      </div>
      <div>
            <button type="button" className="btn--red">
             Emergency
            </button>
      </div>
</div>

         
            
            

            
            
            
            
            
            
            
            
            
            
            
           { /* <div>
                <h2>Please choose a resource from the list below:</h2>
                <ul>
                    <li className='resources-item'>
                      <Link
                      to="/sala1"
                      className='resources-links'
                      onClick={closeMobileMenu}>
                      sala1</Link></li>
                    <li ><Link to="/sala2"
                        className='resources-links'
                        onClick={closeMobileMenu}>
                        sala2</Link></li>
                    <li><Link to="/sala3"
                      className='resources-links'
                      onClick={closeMobileMenu}>
                      sala3</Link></li>
                    <li><Link to="/sala4"
                      className='resources-links'
                      onClick={closeMobileMenu}>
                      sala4</Link></li>
                    <li><Link to="/sala5"
                    className='resources-links'
                    onClick={closeMobileMenu}
                    >sala5</Link></li>
                </ul>
            </div>  */}
           
    </>
  );

}
