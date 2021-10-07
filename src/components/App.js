import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './App.scss';
import Dashboard from './Dashboard';
import MenuAppBar from './Navbar';
import Landing from './Landing';
import Login from './login/Login';
import useToken from './login/useToken';

function setToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
   <div className="main-wrapper">
    <MenuAppBar/>
    <BrowserRouter>
      <Switch>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
   </div>
  );
}

export default App;
