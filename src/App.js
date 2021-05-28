import './App.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([
    'Take dogs for a walk',
    'Take the rubbish out',
  ]);

  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault(); //stop the refresh once form is submitted
    setTodos([...todos, input]);
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
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
