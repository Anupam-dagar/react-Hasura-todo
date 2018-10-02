import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import GetTodos from './GetTodos';

const ACCESS_TOKEN = localStorage.getItem('access_token');
export const client = new ApolloClient({
  uri: "https://hasura-react-todo.herokuapp.com/v1alpha1/graphql",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  }
});

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      isAuthenticated() && (
        <ApolloProvider client={client}>
          <div className="container">
            <GetTodos />           
          </div>
        </ApolloProvider>
      )
    );
  }
}

export default Home;