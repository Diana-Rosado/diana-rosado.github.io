import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import interestStyles from "./interestStyles.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import MultiSelect from "react-multi-select-component";
import { UserContext } from "../../currentData.jsx";
import firebase from "../firestore";

const useStyles = makeStyles(interestStyles);

function Interests() {
  const user = useContext(UserContext);

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
    // db.settings({
    //   timestampsInSnapshots: true,
    // });
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

  // useEffect(() => {
  //   if (user.grade.length === 0) {
  //     window.location.href = '/form';
  //   }
  // });

  function goBack(e) {
    user.setInvisible(true);
    user.setInterestsVisibility(false);
  }
  return (
    <div>
      {/* <section className={classes.header}>
        <img src={bird} alt={"Phoenix Logo"} className={classes.img} />
        <nav>
          <Button className={classes.btnLink} component={Link} to="/" exact>
            Imagication
          </Button>
        </nav>
      </section> */}
      {/* <section className={classes.group}> */}
      {/* <figure className={classes.body}> */}
      <article className={classes.container}>
        <figcaption className={classes.conText}>
          Oh, so you're in {user.grade}? What are you interested in today?
            </figcaption>
      </article>
      <div className={classes.back}>
        <Button
          className={classes.backBtn}
          // component={Link}
          // to="/Form"
          onClick={goBack}
        >
          Back
          </Button>
      </div>
      <article>
        <form
          className={classes.form}
          data-toggle="buttons"
        >
          <MultiSelect
            options={options}
            value={user.interest}
            onChange={user.setInterest}
            labelledBy={"Select"}
            defaultIsOpen="true"
            className={classes.dropdown}
          />
          <NextPage />
        </form>
      </article>
      {/* </figure> */}
      {/* </section> */}
    </div>
  );
}

export default Interests;
