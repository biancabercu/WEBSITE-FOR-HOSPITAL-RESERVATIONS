import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import Navbar from '../Navbar';
import sala1 from './sala1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function SignUp() {
  return (
    <>
      <div className='sign-up'>
        {/* <p>Click here to sign in</p> */}
        {/* <h1 className='sign-up'>SIGN IN</h1>; */}
          <Link
          to='/Form'
          className='nav-links'
          > SIGN IN </Link>
      </div>
  </>
  )
}
