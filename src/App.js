import './App.css';
import React, { useState } from 'react';
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
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          {' '}
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
