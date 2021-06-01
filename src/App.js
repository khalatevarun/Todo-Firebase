import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  Select,
  TextField,
} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 60,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [orderBy, setOrderBy] = useState('desc');

  console.log(todos);
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', orderBy)
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })),
        );
      });
  }, [orderBy]);

  const handleChange = (event) => {
    setOrderBy(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault(); //stop the refresh once form is submitted
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  const colors = [
    'linear-gradient(\n    90deg,\n    rgba(255, 118, 20, 1) 0%,\n   rgba(255, 84, 17, 1) 100%\n  )',
    'linear-gradient(\n    90deg,\n    rgba(93, 12, 255, 1) 0%,\n    rgba(155, 0, 250, 1) 100%\n  )',
    'linear-gradient(\n    90deg,\n    rgba(255, 12, 241, 1) 0%,\n   rgba(250, 0, 135, 1) 100%\n  )',
    'linear-gradient(\n    90deg,\n    rgba(20, 159, 255, 1) 0%,\n   rgba(17, 122, 255, 1) 100%\n  )',
  ];

  return (
    <div className="parent-container">
      <div className="part1">
        <div style={{ flex: '1' }}></div>
        <p className="title"> My Todo List</p>
        <div style={{ flex: '1', marginTop: '20px' }}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel>Sort By</InputLabel>
            <Select native value={orderBy} onChange={handleChange}>
              <option value={'desc'}>Newest</option>
              <option value={'asc'}>Oldest</option>
            </Select>
          </FormControl>
        </div>
      </div>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          placeholder="Add a todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          name="text"
          className="todo-input"
          //  ref={inputRef}
        />
        <button onClick={addTodo} className="todo-button" disabled={!input}>
          Add todo
        </button>
      </form>

      {/* <form>
        <FormControl>
          <TextField
            style={{
              color: '#fff',
              borderRadius: ' 4px 0 0 4px',
              border: '2px solid #5d0cff',
            }}
            placeholder="Write a Todo"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            id="my-input"
            variant="outlined"
          />
        </FormControl>
        <Button
          style={{
            background:
              'linear-gradient(\n    90deg,\n    rgba(93, 12, 255, 1) 0%,\n    rgba(155, 0, 250, 1) 100%\n  )',
            padding: '15px',
            color: '#fff',
            borderRadius: ' 0 4px 4px 0',
          }}
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="outlined"
          color="primary"
        >
          Add Todo
        </Button>
      </form> */}
      <ul className="todoList">
        {todos.map((todo, index) => (
          <Todo task={todo} color={colors[index % 4]} />
        ))}
      </ul>
    </div>
  );
}

export default App;
