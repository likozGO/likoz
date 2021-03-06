import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { DEV_USER_API } from '../../../../Constants/CONST_ADMIN';
import { UserListDelete, UserSelected } from './ReduxAction';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function UserDialogDelete() {
  const [open, setOpen] = React.useState(false);
  const userDB = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const users = userDB.userSelected;
  const usersId = users.map((a) => a._id);

  const userAmount = userDB.userSelected.length;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = () => {
    for (let i = 0; i < userAmount; i++) {
      axios.delete(`${DEV_USER_API}users/${usersId[i]}`, {
        headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0NTJhYzI4ZDEzNzJmZmNjYjYxOTciLCJpYXQiOjE2MDE0NTg4NjN9.HKoAj9Txw4pQ0FBJf0m8SKN2_LVGkq3oYAS7KagR3sI' },
      })
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = () => {
    setOpen(false);
    console.log('user deleted');
    dispatch(UserListDelete(usersId));
    dispatch(UserSelected([]));
    deleteUser();
  };

  return (
    <div>
      <Tooltip title="Delete">
        <IconButton aria-label="delete" variant="outlined" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {`Are you sure to delete this ${userAmount > 1 ? `${userAmount} users` : 'user'}`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
