import React from "react";
import homeDashboardStyles from "./homeDashboardStyles.js";
import { makeStyles, Button, Card, CardActionArea, CardContent, Typography, CardActions } from "@material-ui/core";
import plan from "../../Icons/plan.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles(homeDashboardStyles);
function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.dashboard} >
            <section className={classes.greeting}>
                <h1>Welcome to Imagication! Let's get you started.</h1>
            </section>
            <section className={classes.assignments}>
                <Card style={{ height: '100%' }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Financial Planning: College Expenses
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                How much do you really know about college expenses? What other costs are associated with college? ...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Click Here to Access Content
                        </Button>
                    </CardActions>
                </Card>
            </section>
        </div>
    );
}

export default Dashboard;
