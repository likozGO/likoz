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
import { DEV_USER_API } from '../../../../../Constants/CONST_ADMIN';

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


function handleAddUser(e) {
  e.preventDefault();
  const {
    username, email, password, id,
  } = e.currentTarget.elements;


  const user = {
    username: username.value,
    email: email.value,
    password: password.value,
    id: id.value,
  };

  console.log(user);

  axios.post(`${DEV_USER_API}users/update/${user.id}`, user)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}


export default function UserDialogEdit(props) {
  const classes = useStyles();
  const { user_info } = props;
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [inputValue, handleValue] = React.useState(
    {
      username: user_info.username,
      email: user_info.email,
      password: user_info.password,
      id: user_info._id,
    },
  );

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
            <Grid item xs={12} sm={12}>
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
