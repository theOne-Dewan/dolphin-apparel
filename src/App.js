import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component';

function App() {
  return (
    <div >
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/login' component={LoginAndRegisterPage}/>
        </Switch>
    </div>
  );
}

export default App;
