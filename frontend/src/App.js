import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import sala1 from './components/pages/sala1';
import sala2 from './components/pages/sala2';
import sala3 from './components/pages/sala3';
import sala4 from './components/pages/sala4';
import sala5 from './components/pages/sala5';
import sala6 from './components/pages/sala6';
import Form from './components/Form';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sala1' component={sala1} />
          <Route path='/sala2' component={sala2} />
          <Route path='/sala3' component={sala3} />
          <Route path='/sala4' component={sala4} />
          <Route path='/sala5' component={sala5} />
          <Route path='/sala6' component={sala6} />
          <Route path='/login' component={Login} />
         
          {/* <Route path="/">
          <Login authHandler={authHandler} userDataHandler={userDataHandler} />
          </Route> */}
          <Route path='/form' component={Form} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
