import React from "react";
import { makeStyles } from "@material-ui/core";

import missionStyleSheet from './missionStyles.js';

const useStyles = makeStyles(missionStyleSheet);

function Mission() {
    const classes = useStyles();
    
    return(
            <div className={classes.mission}>
                <h1>Enhancing the educational journey</h1>
                <p>Imagication’s mission is to provide every student  reliable resources and opportunities to enhance their educational journey.</p>
            </div>
    );
}

export default Mission;
