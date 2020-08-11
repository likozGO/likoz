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
import { useSelector } from 'react-redux';
import axios from 'axios';
import { DEV_USER_API } from '../../../../Constants/CONST_ADMIN';
import { PopupAction, ReduxAction, UserListAdd } from './ReduxAction';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function UserDialogDelete() {
  const [open, setOpen] = React.useState(false);
  const userDB = useSelector((state) => state.UserReducer);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          Are you sure to delete this
          {' '}
          {userDB.userSelected}
          {' '}
          users?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
