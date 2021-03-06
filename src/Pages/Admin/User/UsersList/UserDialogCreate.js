import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { DEV_USER_API } from '../../../../Constants/CONST_ADMIN';
import { PopupAction, ReduxAction, UserListAdd } from './ReduxAction';

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
}));

export default function UserDialogCreate() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const dispatch = useDispatch();

  const userDB = useSelector((state) => state.UserReducer);
  const { rows, loading, error } = userDB;
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  function handleAddUser(e) {
    e.preventDefault();
    const { username, password, email } = e.currentTarget.elements;

    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    axios.post(`${DEV_USER_API}users/register`, user, {
      headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0NTJhYzI4ZDEzNzJmZmNjYjYxOTciLCJpYXQiOjE2MDE0NTg4NjN9.HKoAj9Txw4pQ0FBJf0m8SKN2_LVGkq3oYAS7KagR3sI' },
    })
      .then((usersAdd) => {
        user.isAdmin = 'false';
        user.isNew = 'NEW';
        console.log(usersAdd);
        dispatch(UserListAdd(user));
        axios.get(`${DEV_USER_API}users`, {
          headers: { 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc0NTJhYzI4ZDEzNzJmZmNjYjYxOTciLCJpYXQiOjE2MDE0NTg4NjN9.HKoAj9Txw4pQ0FBJf0m8SKN2_LVGkq3oYAS7KagR3sI' },
        })
          .then((usersGet) => dispatch(ReduxAction(usersGet.data)));
        dispatch(PopupAction());
      })
      .catch((err) => console.log(err));
  }

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
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                required
                id="password"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                fullWidth
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
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
