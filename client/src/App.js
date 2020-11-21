import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';

import './App.scss';
import Register from './pages/Register';
import Login from './pages/Login';
import { AuthProvider } from './context/authContext';
import Home from './pages/home/Home';
import AuthRoute from './util/AuthRoute';
import { MessageProvider } from './context/messageContext';

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <Container className="pt-5">
              <Switch>
                <AuthRoute exact path="/" component={Home} authenticated />
                <AuthRoute path="/register" component={Register} guest />
                <AuthRoute path="/login" component={Login} />
              </Switch>
            </Container>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
