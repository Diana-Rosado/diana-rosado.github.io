import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import firebase from "../../Serena/firestore";
import check from "../../Icons/check.svg";
import contactStyleSheet from "./contactStyles.js";
import Wave from "../../Icons/WaveUp.png";

const useStyles = makeStyles(contactStyleSheet);

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const classes = useStyles();
  const [invisible, setInvisible] = useState(true);
  const [visible, setVisible] = useState(false);

  function Disappear(e) {
    e.preventDefault();
    setInvisible(false);
    setVisible(true);
    contactInfo();
  }

  const contactInfo = () => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    // const userRef = db.collection("users").add({
    db.collection("newsletter").add({
      name: name,
      email: email,
      comment: comment,
    });
  };

  return (
    <div>
      <img className={classes.Wave} src={Wave} alt={"Wave"}></img>
      <section
        style={{ backgroundColor: "#F6F6F6" }}
        className={classes.background}
      >
        <div className={classes.title}>
          <p id="contact">Interested to learn more?</p>
        </div>
        <div className={classes.contactus}>
          {invisible ? (
            <div>
              <div className={classes.tab}>
                <p className={classes.top}>We would love to hear from you</p>
                <p className={classes.bottom}>
                  Send us a message and let us know what you think
                </p>
              </div>
              <form onSubmit={Disappear}>
                <label for="name"></label>
                <input
                  type="text"
                  id="name"
                  name="fullname"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label for="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label for="subject"> </label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Tell us what you think"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
                <input
                  type="submit"
                  className={classes.submit}
                  value="Submit"
                />
              </form>
            </div>
          ) : null}
          {visible ? (
            <section className={classes.confirm}>
              <img src={check} alt={""}></img>
              <p>Your message was successfully sent!</p>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default Contact;
