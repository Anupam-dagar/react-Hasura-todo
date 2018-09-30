import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import { addTodo } from '../queries';

const Todos = () => {
    let state = {};

    return (
        <Mutation mutation={addTodo}>
            {(insert_todos, { data }) => (
                <div>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            insert_todos({ variables: state });
                        }}
                    >
                        <input
                            className="mb2"
                            onChange={e => state["todo_id"]=e.target.value}
                            type="text"
                            placeholder="A id"
                        />
                        <input
                            className="mb2"
                            onChange={e => state["todo_text"]=e.target.value}
                            type="text"
                            placeholder="A text"
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                </div>
            )}
        </Mutation>
    );
};

export default Todos;