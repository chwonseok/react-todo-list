import React, { useState } from 'react';

import classes from './App.module.css';
import AddTodo from './components/todos/AddTodo';
import DisplayTodo from './components/todos/DisplayTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { todo: todo, id: Math.random().toString() }];
    });
  };

  return (
    <div className={classes.app}>
      <AddTodo onSavedTodos={todoHandler} />
      <DisplayTodo todos={todos} />
    </div>
  );
};

export default App;
