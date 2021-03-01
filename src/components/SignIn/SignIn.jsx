import React from 'react';
import { makeStyles } from "@material-ui/core";
import SignInStyles from './SignInStyles';
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(SignInStyles);
function SignIn() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Button
                className={classes.Imagication}
                component={Link}
                to="/"
                exact
            >
                Imagication
            </Button>
            <header className={classes.header}>
                <button className={classes.login}>LOGIN</button>

            </header>
            <body className={classes.body}>
                <h2> Create your profile</h2>
                <form className={classes.form}>
                    <label for="name"></label>
                    <input
                        className={classes.info}
                        type="text"
                        id="name"
                        name="fullname"
                        placeholder="Full Name"
                        required
                    />

                    <label for="email"></label>
                    <input
                        className={classes.info}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <label for="password"></label>
                    <input
                        className={classes.info}
                        type="text"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <label for="confirmPassword"></label>
                    <input
                        className={classes.info}
                        type="text"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                    />
                    <input type="submit" className={classes.submit} value="Create Account" />

                </form>
            </body>
            <footer className={classes.footer}></footer>
        </div>
    )
}

export default SignIn
