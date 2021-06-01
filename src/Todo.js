import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Modal,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';
import db from './firebase';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
function Todo(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.task.todo);

  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.task.id).set(
      {
        todo: input,
      },
      { merge: true },
    );

    setOpen(false);
  };

  return (
    <>
      <div className="task" style={{ background: props.color }}>
        <Modal open={open} onClose={(e) => setOpen(false)}>
          <div className={classes.paper}>
            <h1>open</h1>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button onClick={updateTodo}>Update Todo</Button>
          </div>
        </Modal>
        <List className="todo_list">
          <ListItem>
            <ListItemText primary={props.task.todo} />
          </ListItem>
          <EditIcon onClick={(e) => setOpen(true)} />
          <DeleteIcon
            style={{ margin: '15px' }}
            onClick={(event) =>
              db.collection('todos').doc(props.task.id).delete()
            }
          />
        </List>
      </div>
    </>
  );
}

export default Todo;
