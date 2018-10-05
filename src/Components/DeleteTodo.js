import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { deleteTodo, getIncompleteTodos, getAllTodos } from '../queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

class DeleteTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    deletetodo(delete_todos) {
        delete_todos({ variables: this.props, refetchQueries: [{ query: getIncompleteTodos }, { query: getAllTodos }] });
    }

    render() {
        return (
            <Mutation mutation={deleteTodo}>
                {(delete_todos, { data }) => (
                    <Button onClick={e => {
                        e.preventDefault();
                        this.deletetodo(delete_todos);
                    }}  ><FontAwesomeIcon icon={faTimes} style={{ color: 'red' }} /></Button>
                )}
            </Mutation>
        );
    }
}

export default DeleteTodo;