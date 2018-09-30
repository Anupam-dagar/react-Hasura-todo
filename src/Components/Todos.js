import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";
import { Mutation } from 'react-apollo';
import { Query } from 'react-apollo';
import { addTodo } from '../queries';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_id: 0,
            todo_text: "",
            user_id: ""
        }
    }

    getUserId() {
        const userid = localStorage.getItem('sub');
        return userid;
    }

    addtodo(insert_todos) {
        var usr_id = this.getUserId();
        this.setState({user_id:usr_id});
        insert_todos({ variables: this.state });
    }

    render() {
        return (
            <Mutation mutation={addTodo}>
                {(insert_todos, { data }) => (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                this.addtodo(insert_todos);
                            }}
                        >
                            <input
                                className="mb2"
                                onChange={e => this.setState({ todo_id: e.target.value })}
                                type="text"
                                placeholder="A id"
                            />
                            <input
                                className="mb2"
                                onChange={e => this.setState({ todo_text: e.target.value })}
                                type="text"
                                placeholder="A text"
                            />
                            <button type="submit">Add Todo</button>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    }

}

export default Todos;