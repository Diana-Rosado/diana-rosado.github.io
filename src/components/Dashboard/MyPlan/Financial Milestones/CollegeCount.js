import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core";
import { CollegeContext } from './CollegeContext.jsx';
import College from './College.js';
import financialStyles from './financialStyles.js';

const useStyles = makeStyles(financialStyles);

const CollegeCount = () => {
    const classes = useStyles();
    const [colleges, setColleges] = useContext(CollegeContext);
    return (
        <div>
            <section className={classes.number}>
                <div>
                    <p>
                        You have selected: {colleges.length} college(s)
                    </p>
                </div>
            </section>
        </div>
    )
}

export default CollegeCount;
