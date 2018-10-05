# React Hasura Todo

A simple todo app built using React and Hasura GraphQL Enginer.

![](./src/assets/readme.jpeg)

![](https://img.shields.io/badge/Language-JavaScript-brightgreen.svg)

Features:
1. Secure Authentication using auth0.
2. Create as many todos as you want. Mark them complete or delete them if required.
3. Check all your todos created till now.

## Try this app 
[https://reacthasuratodo.herokuapp.com/](https://reacthasuratodo.herokuapp.com/)

## Setting up your own todo app with your own database.
1. Clone this repository using `https://github.com/Anupam-dagar/react-Hasura-todo.git`
2. Install the dependencies using `yarn install`.
3. Deploy your Hasura GraphQL Server using [One Click Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku).
4. In your just created Heroku app, add an environment variable `HASURA_GRAPHQL_ACCESS_KEY` with its value being something you can remember. This key will be required to access your Hasura GraphQL server.
5. Create a table named `todos` with following fields
    - todo_id: integer (auto increment)
    - todo_text: Text
    - todo_mark: Boolean
    - todo_user: Text
    - Chose todo_id as Primary Key.
6. Set the permissions for your table in Hasura GraphQL server as follows:
    - Create a new `role` user.
    - For `insert` chose `with custom checks`
        - Select `todo_user` as the field, make it `_eq` to `X-HASURA-USER-ID`
    - For `select` chose `with same checks as ----` and select all columns for access.
    - For `update` chose `with same checks as ----` and give access only to `todo_mark` column.
    - For `delete` chose `with same checks as ----`.
7. Sign up on [https://auth0.com](https://auth0.com) and create a new application.
8. In the application settings, add `http://localhost:3000/callback` to the `Allowed Callback Urls`.
9. Deploy auth0handler using [One Click Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/hasura/sample-auth-webhook)
10. Add an environment variable to your just deployed auth handler `AUTH_ZERO_DOMAIN` with its value being your auth0 domain address.
11. Add an environment variable in your Hasura GraphQL server Heroku app .`HASURA_GRAPHQL_AUTH_HOOK` and keep its value `your auth0 handler url/auth0/webhook`.
12. Create a file .env and include write the following data in it.
```
REACT_APP_CLIENTID=''
REACT_APP_REDIRECTURI='http://localhost:3000/callback'
```
13. Change the `domain` in `src/Auth/Auth.js` to your auth0 domain.
14. Change the `uri` in `src/Components/Home.js` to your Hasura GraphQL server url endpoint.
15. Run the local server using yarn start.

## LICENSE
MIT
