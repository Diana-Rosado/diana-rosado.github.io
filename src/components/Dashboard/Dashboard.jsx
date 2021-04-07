import React from 'react'
import { makeStyles } from "@material-ui/core";
import DashboardStyles from './DashboardStyles.js'
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import user from '../Icons/user.png';
import Financial from './MyPlan/Financial Milestones/financialMS.jsx';
import Home from '../Dashboard/Home/homeDashboard.jsx';


const useStyles = makeStyles(DashboardStyles);
function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <section className={classes.header}>
                <div className={classes.user}>
                    <div className={classes.user}>
                        <img src={user} alt={"user"} className={classes.userImg} />
                    </div>
                    <h6 className={classes.username}>Sara</h6>
                </div>

            </section>
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

        </div >
    )
}

export default Dashboard
