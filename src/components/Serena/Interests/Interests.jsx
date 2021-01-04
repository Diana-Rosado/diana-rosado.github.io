import React from 'react';
import { makeStyles } from "@material-ui/core";
import interestStyles from "./interestStyles.js";

const useStyles = makeStyles(interestStyles);

function Interests() {
    const classes = useStyles();
    return (
        <div>

            <h3>Hello</h3>
        </div>
    )
};

export default Interests
