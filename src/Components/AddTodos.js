import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { addTodo, getIncompleteTodos } from '../queries';

class AddTodos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_text: "",
            todo_user: ""
        }
    }

    addtodo(insert_todos) {
        var todo_user = localStorage.getItem('sub');
        this.setState({ todo_user: todo_user }, function () {
            insert_todos({ variables: this.state ,refetchQueries: [{query: getIncompleteTodos}]});
        });
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

export default AddTodos;