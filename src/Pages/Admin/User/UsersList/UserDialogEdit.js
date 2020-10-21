import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PopupAction, ReduxAction, UserSelected } from './ReduxAction';
import { DEV_USER_API } from '../../../../Constants/CONST_ADMIN';
import SwitchAdmin from './SwitchAdmin';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  InputHidden: {
    visibility: 'hidden',
  },
}));

export default function UserDialogEdit() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userDB = useSelector((state) => state.UserReducer);
  const user = userDB.userSelected[0];

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const [inputValue, handleValue] = React.useState(
    {
      username: user.username,
      email: user.email,
      password: user.password,
      id: user._id,
      isAdmin: user.isAdmin,
    },
  );

  function handleAddUser(e) {
    e.preventDefault();
    const {
      username, email, password, id, isAdmin,
    } = e.currentTarget.elements;

    const userData = {
      username: username.value,
      email: email.value,
      password: password.value,
      id: id.value,
      isAdmin: isAdmin.value,
    };
    if (user.password !== password.value) {
      userData.password = password.value;
    }
    axios.post(`${DEV_USER_API}users/update/${userData.id}`, userData,
      {
        headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0NTJhYzI4ZDEzNzJmZmNjYjYxOTciLCJpYXQiOjE2MDE0NTg4NjN9.HKoAj9Txw4pQ0FBJf0m8SKN2_LVGkq3oYAS7KagR3sI' },
      })
      .then(() => {
        axios.get(`${DEV_USER_API}users`, {
          headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0NTJhYzI4ZDEzNzJmZmNjYjYxOTciLCJpYXQiOjE2MDE0NTg4NjN9.HKoAj9Txw4pQ0FBJf0m8SKN2_LVGkq3oYAS7KagR3sI' },
        })
          .then((usersGet) => {
            dispatch(ReduxAction(usersGet.data));
            dispatch(PopupAction());
            dispatch(UserSelected([]));
          });
      })
      .catch((err) => console.log(err));
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <>
      <Container maxWidth="sm">
        <form className={classes.root} autoComplete="off" onSubmit={handleAddUser}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="standard-adornment-email">Username</InputLabel>
              <Input
                required
                id="username"
                name="username"
                value={inputValue.username}
                onChange={(e) => handleValue({ username: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                required
                id="email"
                name="email"
                type="email"
                value={inputValue.email}
                onChange={(e) => handleValue({ email: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                required
                id="password"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                fullWidth
                value={inputValue.password}
                onChange={(e) => handleValue({ password: e.target.value })}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                                )}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <InputLabel htmlFor="standard-adornment-password">isAdmin</InputLabel>
              <SwitchAdmin isAdmin={handleValue} disable={false} edit={inputValue.isAdmin} />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<PersonAddIcon />}
                fullWidth
                type="submit"
              >
                Edit
              </Button>
            </Grid>
          </Grid>
          <Input id="id" value={inputValue.id} className={classes.InputHidden} />
        </form>
      </Container>
    </>
  );
}
