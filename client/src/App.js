import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import './App.css';

// import HomePage from './pages/homepage/homepage';
// import ShopPage from './pages/shop/shop.jsx';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
// import CheckoutPage from './pages/checkout/checkout';
import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
/*import { selectCollectionsForPreview } from './redux/shop/shop.selectors';*/

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop.jsx'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

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
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route 
                exact 
                path='/signin' 
                render={() => 
                  currentUser ? 
                    <Redirect to='/' />
                  : 
                  <SignInAndSignUpPage />
                } 
              />     
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }

export default App;
