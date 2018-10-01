import React from 'react';
import { Query } from 'react-apollo';
import { getIncompleteTodos } from '../queries';
import MarkTodo from './MarkTodo';
import DeleteTodo from './DeleteTodo';
import AddTodos from './AddTodos';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const GetTodos = () => (
    <Query query={getIncompleteTodos}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            if (data.todos.length == 0) return (
                <div>
                    <h3>No Todos Created Yet</h3>
                    <AddTodos />
                </div>
            );
            return (
                <div>
                    <ListGroup>
                        {data.todos.map(todo => (
                            <ListGroupItem>
                                {todo.todo_id} - {todo.todo_text} - {todo.todo_user}
                                <MarkTodo todo_id={todo.todo_id} />
                                <DeleteTodo todo_id={todo.todo_id} />
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    <AddTodos />
                </div>
            );
        }}
    </Query>
);

export default GetTodos;