import React from "react";
import { makeStyles } from "@material-ui/core";
import financialStyles from "./financialStyles.js";
import { useParams } from "react-router";
const useStyles = makeStyles(financialStyles);


function financialMS() {
    return (
        <div>
            <section style={{ backgroundColor: 'red' }}>
                TESTINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
            </section>
        </div>
    )
}

export default financialMS
