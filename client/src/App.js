import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/header'

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
/*import { selectCollectionsForPreview } from './redux/shop/shop.selectors';*/

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />     
        </Switch>
      </div>
    );
  }

export default App;
