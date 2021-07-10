import React from "react";
import { makeStyles } from "@material-ui/core";
import homeDashboardStyles from "./homeDashboardStyles.js";
import { Button } from "@material-ui/core";
import plan from "../../Icons/plan.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(homeDashboardStyles);
function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.dashboard} >
            <section className={classes.greeting}>

            </section>
        </div>
    );
}

export default Dashboard;
