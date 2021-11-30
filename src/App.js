import React, { useEffect } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from  'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div >
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/login' render={() => currentUser ? (<Redirect to='/'/>) : (<LoginAndRegisterPage/>)}/> 
        </Switch>
    </div>
  );
};

const mapStateTopProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchTopProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateTopProps, mapDispatchTopProps)(App);
