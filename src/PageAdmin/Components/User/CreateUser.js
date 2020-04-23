import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function CreateUser() {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="sm">
                <Typography variant="h3" gutterBottom>
                    Create User
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="username"
                            name="username"
                            label="Username"
                            fullWidth
                            autoComplete="uname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            autoComplete="mail"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
                            fullWidth
                            autoComplete="pass"
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
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}