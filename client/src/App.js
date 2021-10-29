import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute'

// import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Dashboard from './components/main/dashboard/Dashboard';
import NotFound from './components/layout/NotFound'
import Memes from './components/main/memes/Memes'
import Timeline from './components/main/timeline/Timeline'
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
// 
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/memes" component={Memes} />
            <PrivateRoute exact path="/timeline" component={Timeline} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
