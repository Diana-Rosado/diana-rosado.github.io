import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import interestStyles from "./interestStyles.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import bird from "../Form/bird.svg";
import MultiSelect from "react-multi-select-component";
import { UserContext } from "../../currentData.jsx";
import firebase from "../firestore";

const useStyles = makeStyles(interestStyles);

function Interests() {
  const user = useContext(UserContext);
  const [isVisible, setVisibility] = useState(false);

  const onClick = () => setVisibility(true);

  const formatInterests = () => {
    // for (var j = user.interests.length - 1; j >= 0; j--) {
    //   user.setInterests(user.interests.splice(j));
    // }
    user.setInterests([]);

    for (let i = 0; i < user.interest.length; i++) {
      user.setInterests((prevInterest) => [
        ...prevInterest,
        user.interest[i].value,
      ]);
    }
    createTrialUsers();
  };

  const createTrialUsers = () => {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    // const userRef = db.collection("users").add({
    db.collection("users").add({
      grade: user.grade,
      interests: user.interest,
    });
  };

  const NextPage = () => (
    <div className={classes.next}>
      <Button
        component={Link}
        to="/resources"
        exact
        className={classes.nextBtn}
        onClick={formatInterests}
      >
        Get Started Now
      </Button>
    </div>
  );

  const options = [
    { label: "Academic Resources", value: "academics" },
    { label: "Career", value: "career" },
    { label: "Volunteering", value: "volunteering" },
    { label: "Scholarships", value: "scholarships" },
  ];

  const classes = useStyles();

  useEffect(() => {
    if (user.grade.length === 0) {
      window.location.href = '/form';
    }
  });


  return (
    <div className={classes.background}>
      <section className={classes.header}>
        <img src={bird} alt={"Phoenix Logo"} className={classes.img} />
        <nav>
          <Button className={classes.btnLink} component={Link} to="/" exact>
            Imagication
          </Button>
        </nav>
      </section>
      <section className={classes.group}>
        <figure className={classes.body}>
          <article className={classes.container}>
            <figcaption className={classes.conText}>
              Oh, so you're in {user.grade}? What are you interested in today?
            </figcaption>
          </article>
          <div className={classes.back}>
            <Button className={classes.backBtn} component={Link} to="/Form">
              Back
              </Button>
          </div>
          <article>
            <form
              className={classes.form}
              data-toggle="buttons"
              onClick={onClick}
            >
              <MultiSelect
                options={options}
                value={user.interest}
                onChange={user.setInterest}
                labelledBy={"Select"}
                defaultIsOpen="true"
                className={classes.dropdown}
              />
              {isVisible ? <NextPage /> : null}
            </form>
          </article>
        </figure>
      </section>
    </div>
  );
}

export default Interests;
