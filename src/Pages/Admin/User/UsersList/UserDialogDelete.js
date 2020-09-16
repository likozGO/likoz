import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { DEV_USER_API } from '../../../../Constants/CONST_ADMIN';
import {
  PopupAction, ReduxAction, UserListAdd, UserListDelete,
} from './ReduxAction';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function UserDialogDelete({ setSelected }) {
  const [open, setOpen] = React.useState(false);
  const userDB = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const usersId = userDB.userSelected;
  const usersAll = userDB.rows;
  const userAmount = userDB.userSelected.length;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = () => {
    for (let i = 0; i < userAmount; i++) {
      axios.delete(`${DEV_USER_API}users/${usersId[i]}`)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = () => {
    setOpen(false);
    console.log('user deleted');
    dispatch(UserListDelete(usersId));
    setSelected([]);
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
