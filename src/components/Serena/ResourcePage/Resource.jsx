import React from 'react';
import { makeStyles } from "@material-ui/core";
import resourceStyles from "./resourceStyles.js";

const useStyles = makeStyles(resourceStyles);

function Resource() {

    const classes = useStyles();

    return (
        <div>
            this is the resource page
        </div>
    )
}

export default Resource
