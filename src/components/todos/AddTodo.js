import React from 'react';

import classes from './AddTodo.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddTodo = (props) => {
  const submithandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.form}>
      <h1>Add What To do</h1>
      <form onSubmit={submithandler}>
        <div className={classes.todo}>
          <input type="text" required />
          <label>Enter to-do</label>
        </div>
        <Button>Add</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
