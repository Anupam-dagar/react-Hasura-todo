import gql from 'graphql-tag';

export const getAllTodos = gql`{
    todos{
        todo_id
        todo_text
        todo_mark
        user_id
    }
}`;

export const addTodo = gql`
    mutation($todo_id: Int!,$todo_text: String!, $user_id: String!) {
        insert_todos(
            objects: [
                {
                  todo_id: $todo_id,
                  todo_text: $todo_text,
                  user_id: $user_id
                }
              ]
          ){
            affected_rows
          }
    }
`;
