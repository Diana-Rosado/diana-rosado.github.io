import React, { useContext, useState } from "react";
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
    for (var j = user.interests.length - 1; j >= 0; j--) {
      user.setInterests(user.interests.splice(j));
    }

    for (let i = 0; i < user.interest.length; i++) {
      user.setInterests((prevInterest) => [
        ...prevInterest,
        user.interest[i].label,
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

  const searchBox = {
    chips: {
      background: "#663CBF",
    },
  };

  const NextPage = () => (
    <div className={classes.nextCtn}>
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
  return (
    <div>
      <nav className={classes.link}>
        <Button className={classes.btnLink} component={Link} to="/" exact>
          Imagication
        </Button>
      </nav>
      <main className={classes.body}>
        <figure className={classes.container}>
          <img src={bird} alt={"Phoenix Logo"} className={classes.img} />
          <p className={classes.greet}>Oh, so you're in {user.grade}?</p>
        </figure>
        <div className={classes.ctn1}>
          <p>What are you interested in today?</p>
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
              shouldToggleOnHover={true}
            />
            {isVisible ? <NextPage /> : null}
          </form>
          <div className={classes.backCtn}>
            <Button className={classes.backBtn} component={Link} to="/Form">
              Back
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Interests;
