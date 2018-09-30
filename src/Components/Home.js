import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import Todos from './Todos';

const ACCESS_TOKEN = localStorage.getItem('access_token');
const client = new ApolloClient({
  uri: "https://hasura-react-todo.herokuapp.com/v1alpha1/graphql",
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  }
});

client
  .query({
    query: gql`
    {
      todos{
          todo_id
          todo_text
          todo_mark
          user_id
      }
  }
    `
  })
  .then(result => console.log(result));

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
            <Todos />
          </div>
        </ApolloProvider>
      )
    );
  }
}

export default Home;