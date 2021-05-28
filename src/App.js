import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  console.log(todos);
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })),
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //stop the refresh once form is submitted
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="App">
      <h1>Hello world</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            id="my-input"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo task={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
