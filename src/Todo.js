import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from './firebase';
function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.task.todo} secondary="Dummy deadline..." />
      </ListItem>
      <Button
        onClick={(event) => db.collection('todos').doc(props.task.id).delete()}
      >
        Delete
      </Button>
    </List>
  );
}

export default Todo;
