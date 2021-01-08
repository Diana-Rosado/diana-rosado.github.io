import React, {useState} from 'react';
import { makeStyles } from "@material-ui/core";
import interestStyles from "./interestStyles.js";
import {Button} from '@material-ui/core';
import {Link} from "react-router-dom";
import bird from "../Form/bird.svg";
import { Multiselect, } from 'multiselect-react-dropdown';

const useStyles = makeStyles(interestStyles);

function Interests() {

    const [isVisible,setVisibility] = useState(false)
    const onClick = () => setVisibility(true)

    const NextPage = () =>  (
        <div className = {classes.nextCtn}>
            <Button component ={Link} to = "/resources" exact className = {classes.nextBtn}>
            Next
            </Button>
        </div>
    )
    const searchBox = {
        chips: {
            background: '#663CBF'
                },
    }

    const data = [
        {Resource: 'Academic Resources', id: 1},
        {Resource: 'Career', id: 2},
        {Resource: 'Volunteering', id: 3},
        {Resource: 'Scholarships', id: 4}
    ]
    
    const [options] = useState(data);

    const classes = useStyles();
    return (
        <div>
            <nav className = {classes.link}>
                <Button className = {classes.btnLink} component={Link} to ="/" exact>Imagication</Button>
            </nav>
            <main className = {classes.body}>
            <figure className = {classes.container}>
                    <img src={bird} alt={"Phoenix Logo"} className = {classes.img}/>
                </figure>
                <div className = {classes.ctn1}>
                    <p >What are you interested in today?</p>
                    <form className = {classes.form} data-toggle = "buttons" onClick={onClick}>
                        <Multiselect 
                        className = {classes.resources} 
                        options = {options} 
                        displayValue ={'Resource'}
                        closeOnSelect = {false}
                        avoidHighlightFirstOption = {true}
                        style={searchBox}
                        />
                        {isVisible ? <NextPage/> : null}
                    </form>
                    <div className = {classes.backCtn}>
                        <Button className = {classes.backBtn} component = {Link} to = "/Form">Back</Button>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Interests
