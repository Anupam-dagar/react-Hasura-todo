import gql from 'graphql-tag';

export const getAllTodos = gql`{
    todos(
        order_by: id_desc
    ){
        todo_id
        todo_text
        todo_mark
    }
}`;

export const addTodo = gql`
    mutation($todo_id: Int!,$todo_text: String!) {
        insert_todos(
            objects: [
                {
                  todo_id: $todo_id,
                  todo_text: $todo_text
                }
              ]
          ){
            affected_rows
          }
    }
`;
