import React from 'react'
import { makeStyles } from "@material-ui/core";
import DashboardStyles from './DashboardStyles.js'
import { Button } from "@material-ui/core";
import user from '../Icons/user.png';
import Financial from './MyPlan/Financial Milestones/financialMS.jsx';
import Home from '../Dashboard/Home/homeDashboard.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles(DashboardStyles);
function Dashboard() {
    const classes = useStyles();


    const routes = [
        {
            path: "/home",
            main: () => <Home />
        },
        {
            path: "/myplan",
            main: () => <Financial />
        }
    ];

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
                <Router>
                    <nav className={classes.nav}>

                        <Button
                            className={classes.navBtn}
                            component={Link}
                            to="/home"
                        >Home
                        </Button>
                        <Button
                            className={classes.navBtn}
                            component={Link}
                            to="/myplan"
                        >My Plan
                        </Button>
                        <Button
                            className={classes.navBtn}
                            component={Link}
                            to="/myportfolio"
                        >My Portfolio</Button>
                        <Switch>
                            {routes.map((route, index) => (

                                <Route
                                    key={index}
                                    path={route.path}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </nav>
                    <div className={classes.logOut}>
                        <Button>Log Out</Button>
                    </div>

                </Router>
            </section>

        </div >
    )
}

export default Dashboard
