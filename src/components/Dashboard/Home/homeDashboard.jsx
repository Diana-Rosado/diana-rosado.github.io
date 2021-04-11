import React from 'react'
import { makeStyles } from "@material-ui/core";
import homeDashboardStyles from './homeDashboardStyles.js';
import { Button } from "@material-ui/core";
import plan from '../../Icons/plan.png';

const useStyles = makeStyles(homeDashboardStyles);
function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.home}>
            <section className={classes.dashboard}>
                <h1 className={classes.welcome}>Hey Sara, Welcome to Imagication</h1>
                <div className={classes.banner}>
                    <div className={classes.content}>
                        <section className={classes.information}>
                            <div className={classes.text}>College planning made <strong>simply</strong> for you</div>
                            <div className={classes.start}>
                                <Button
                                    className={classes.startBtn}
                                >Let's get started</Button>
                            </div>
                        </section>
                        <section className={classes.startImg}>
                            <img src={plan} alt={"Planning"} className={classes.img} />

                        </section>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Dashboard
