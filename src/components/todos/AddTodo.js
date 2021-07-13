import React, { useState } from 'react';

import classes from './AddTodo.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const submithandler = (e) => {
    e.preventDefault();
    props.onSavedTodos(enteredTodo);
    setEnteredTodo('');
  };

  const inputHandler = (e) => {
    setEnteredTodo(e.target.value);
  };

  return (
    <Card className={classes.form}>
      <h1>Add What To do</h1>
      <form onSubmit={submithandler}>
        <div className={classes.todo}>
          <input
            onChange={inputHandler}
            value={enteredTodo}
            type="text"
            required
          />
          <label>Enter to-do</label>
        </div>
        <Button>Add</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
