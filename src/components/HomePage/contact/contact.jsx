import React from "react";
import { makeStyles } from "@material-ui/core";

import contactStyleSheet from './contactStyles.js';

const useStyles = makeStyles(contactStyleSheet);

function Contact() {
    const classes = useStyles();
    
    return(
            <div>
                <div className = {classes.title}>
                <p>Interested to learn more?</p>
                </div>
                <div className = {classes.contactus}>
                    <div className ={classes.tab}>
                        <p className = {classes.top}>
                            We would love to hear from you
                        </p>
                        <p className = {classes.bottom}>
                            Send us a message and let us know what you think
                        </p>
                  </div>
                    <form>
                    <label for = "name"></label>
                        <input type="text" id = "name" name = "fullname" placeholder = "Your Name"/>

                        <label for = "email"></label>
                        <input type = "email" id = "email" name ="email_address" placeholder= "Your Email Address"/>

                        <label for="subject"> </label>
                        <textarea id="subject" name="subject" placeholder="Tell us what you think"></textarea>
                        <input type = "submit" value = "Submit"/>
                    </form>
                </div>
            </div>
    );
}

export default Contact;
