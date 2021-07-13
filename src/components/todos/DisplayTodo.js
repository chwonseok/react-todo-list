import React from 'react';

import classes from './DisplayTodo.module.css';

const DisplayTodo = (props) => {
  return (
    <ul className={classes.listTodo}>
      {props.todos.map((todos) => (
        <li key={todos.id}>{todos.todo}</li>
      ))}
    </ul>
  );
};

export default DisplayTodo;
