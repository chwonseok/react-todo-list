import React from 'react';

import classes from './App.module.css';
import AddTodo from './components/todos/AddTodo';

const App = () => {
  return (
    <div className={classes.app}>
      <AddTodo />
      {/* <DisplayTodo /> */}
    </div>
  );
};

export default App;
