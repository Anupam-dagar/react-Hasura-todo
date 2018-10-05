import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import Callback from './Components/Callback';
import Auth from './Auth/Auth';
import history from './history';
import GetAllTodos from './Components/GetAllTodos';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/manage" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/alltodos" render={(props) => <GetAllTodos auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    </Router>
  );
}