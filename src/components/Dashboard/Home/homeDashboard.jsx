import React from 'react'
import { makeStyles } from "@material-ui/core";
import homeDashboardStyles from './homeDashboardStyles.js';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(homeDashboardStyles);
function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <section className={classes.sidebar}>
                <div className={classes.logo}>
                    <Button
                        className={classes.logoBtn}
                        component={Link}
                        to="/"
                        exact
                    >
                        Imagication
                    </Button>
                </div>
                <nav className={classes.nav}>
                    <Button className={classes.navBtn}>Home</Button>
                    <Button className={classes.navBtn}>My Plan</Button>
                    <Button className={classes.navBtn}>My Portfolio</Button>

                </nav>
                <div className={classes.logOut}>
                    <Button>Log Out</Button>
                </div>
            </section>
            <section className={classes.dashboard}>
                <h1>Hey "user", Welcome to Imagication</h1>
                <div className={classes.banner}>
                    <div className={classes.content}>
                        <section className={classes.information}>
                            <div className={classes.text}>College planning made <strong>simply</strong> for you</div>
                            <div className={classes.start}>
                                <Button className={classes.startBtn}>Let's get started</Button>
                            </div>
                        </section>
                        <section className={classes.startImg}></section>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Dashboard
