import React, { Component } from 'react';
import { markTodo, getIncompleteTodos } from '../queries';
import { Mutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class MarkTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    marktodo_completed(update_todos) {
        update_todos({ variables: this.props, refetchQueries: [{ query: getIncompleteTodos }] })
    }

    render() {
        return (
            <Mutation mutation={markTodo}>
                {(update_todos, { data }) => (
                    <FontAwesomeIcon onClick={e => {
                        e.preventDefault();
                        this.marktodo_completed(update_todos);
                    }} icon={faCheck} size="2x" style={{color:'green'}} />
                )}
            </Mutation>
        );
    }
}

export default MarkTodo;