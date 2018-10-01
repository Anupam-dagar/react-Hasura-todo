import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { deleteTodo, getIncompleteTodos } from '../queries';

class DeleteTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    deletetodo(delete_todos) {
        delete_todos({ variables: this.props, refetchQueries: [{ query: getIncompleteTodos }] });
    }

    render() {
        return (
            <Mutation mutation={deleteTodo}>
                {(delete_todos, { data }) => (
                    <div>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                this.deletetodo(delete_todos);
                            }}
                        >
                            <button type="submit">Delete Todo</button>
                        </form>
                    </div>
                )}
            </Mutation>
        );
    }

}

export default DeleteTodo;