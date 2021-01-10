import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import resourceStyles from "./resourceStyles.js";
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";
import bird from '../../Icons/bird.svg'
import MultiSelect from "react-multi-select-component";

const useStyles = makeStyles(resourceStyles);

function Resource() {
    const classes = useStyles();

    const [selected, setSelected] = useState([]);

    const options = [
        { label: "Academic Resources", value: "academics" },
        { label: "Career", value: "career" },
        { label: "Volunteering", value: "volunteering" },
        { label: "Scholarships", value: "scholarships" },
      ];

    const SurveyForm = () =>  (
        <figure className = {classes.survey_container}>
            <img src={bird} alt={"Phoenix Logo"} className = {classes.img}></img>
            <div className = {classes.textCtn}>
                <figcaption className = {classes.text}>We hope you’re enjoying Imagication. Would you mind answering a few questions to improve Imagication?</figcaption>
            </div>
        </figure> 
    )
    return (
        <div>
        {/* This section will be the top part of the page */}
            <article className = {classes.header}>
                <nav>
                    <Button className = {classes.btnLink} component={Link} to ="/" exact>Imagication</Button>
                </nav>
                <div className = {classes.grid}>
                    <SurveyForm/>
                    <form className = {classes.form} >
                        <MultiSelect
                            options = {options}
                            value={selected}
                            onChange={setSelected}
                            shouldToggleOnHover ={true}
                        />
                    </form>
                </div>
            </article>
        </div>
    )
}

export default Resource;
