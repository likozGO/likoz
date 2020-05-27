import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CreateUserForm from './CreateUser/CreateUserForm';
import EditUserForm from './EditUser/EditUserForm';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let type = props.modal_type;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const CreateUser = {
    tooltipText: 'Add user',
    icon: <AddIcon />,
    typography: 'Create User',
    form: <CreateUserForm />,
  };
  const EditUser = {
    tooltipText: 'Edit user',
    icon: <EditIcon />,
    typography: 'Edit User',
    form: <EditUserForm user_info={props.user_info} />,
  };

  if (type == 'CreateUser') {
    type = CreateUser;
  } else if (type == 'EditUser') {
    type = EditUser;
  } else {
    type = console.log('error');
  }


  return (
    <div>
      <Tooltip title={type.tooltipText}>
        <IconButton aria-label="filter list" onClick={handleClickOpen}>
          {type.icon}
        </IconButton>
      </Tooltip>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {type.typography}
            </Typography>
          </Toolbar>
        </AppBar>
        {type.form}
      </Dialog>
    </div>
  );
}
