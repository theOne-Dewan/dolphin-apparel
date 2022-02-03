import React, { useEffect, lazy, Suspense } from 'react';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const LoginAndRegisterPage = lazy(() => import('./pages/login-and-register/login-and-register.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const PurchaseConfirmation = lazy(() => import('./components/purchase-confirmation/purchase-confirmation.component'));
const EmailConfirmation = lazy(() => import('./components/email-confirmation/email-confirmation.component'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div >
      <GlobalStyle/>
      <Header/>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/contact' component={ContactPage}/>
              <Route exact path='/email-confirmation' component={EmailConfirmation}/>
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/confirmation' component={PurchaseConfirmation}/>
              <Route exact path='/login' render={() => currentUser ? (<Redirect to='/'/>) : (<LoginAndRegisterPage/>)}/> 
            </Suspense>
          </ErrorBoundary>

        </Switch>
    </div>
  );
};

export default App;
