import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import axios from "axios"
import {DEV_USER_API} from "../../../../../const"

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


function handleAddUser(e) {
    e.preventDefault();
    const {username, password, email} = e.currentTarget.elements;


    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
    }

    axios.post(DEV_USER_API + 'users/add', user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

export default function CreateUserForm() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="sm">
                <form className={classes.root} autoComplete="off" onSubmit={handleAddUser}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.button}
                                startIcon={<PersonAddIcon/>}
                                fullWidth
                                type='submit'
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