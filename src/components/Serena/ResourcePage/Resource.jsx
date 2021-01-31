import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import resourceStyles from "./resourceStyles.js";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import bird from "../../Icons/bird.svg";
import MultiSelect from "react-multi-select-component";
import Card from "react-bootstrap/Card";
import firebase from "../firestore";
import { UserContext } from "../../currentData.jsx";
import Survey from "../Survey/Survey.jsx";
import grayCurve from "../../Icons/grayCurve.svg";

const useStyles = makeStyles(resourceStyles);

function ToLearn() {
  const user = useContext(UserContext);

  const [academicResources, setAcademicResources] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    if (user.interests.length === 0) {
      db.collection("resources")
        .where("value", "in", [
          "academics",
          "career",
          "volunteering",
          "scholarships",
        ])
        .onSnapshot((snapshot) => {
          const newResource = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setAcademicResources(newResource);
        });
    } else {
      db.collection("resources")
        .where("value", "in", user.interests)
        .onSnapshot((snapshot) => {
          const newResource = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setAcademicResources(newResource);
        });
    }
  });
  return academicResources;
}

const Resource = () => {
  const academicResources = ToLearn();
  const user = useContext(UserContext);
  const classes = useStyles();

  const options = [
    { label: "Academic Resources", value: "academics" },
    { label: "Career", value: "career" },
    { label: "Volunteering", value: "volunteering" },
    { label: "Scholarships", value: "scholarships" },
  ];

  // const SurveyForm = () => (

  //     <figure className={classes.survey_container}>
  //       <img src={bird} alt={"Phoenix Logo"} className={classes.img}></img>
  //       <div className={classes.textCtn}>
  //         <Survey />
  //       </div>
  //     </figure>

  // );

  const refresh = () => {
    user.setInterests([]);

    for (let i = 0; i < user.interest.length; i++) {
      user.setInterests((prevInterest) => [
        ...prevInterest,
        user.interest[i].value,
      ]);
    }
  };

  return (
    <div>
      {/* This section will be the top part of the page */}
      <article className={classes.header}>
        <nav>
          <Button
            className={classes.btnLink}
            component={Link}
            to="/"
            exact
            // onClick={() => window.location.reload()}
          >
            Imagication
          </Button>
        </nav>
        <div className={classes.grid}>
          {/* <SurveyForm /> */}
          <figure className={classes.survey_container}>
            <img src={bird} alt={"Phoenix Logo"} className={classes.img}></img>
            <div className={classes.textCtn}>
              <Survey />
            </div>
          </figure>
          <form className={classes.form}>
            <MultiSelect
              options={options}
              value={user.interest}
              onChange={user.setInterest}
              shouldToggleOnHover={true}
            />
          </form>
        </div>
      </article>
      <article className={classes.curve}>
        <img src={grayCurve} alt={""}></img>
      </article>
      <Button onClick={refresh}>Get Started Now</Button>
      <div className={classes.siteList}>
        {academicResources.map((academic) => (
          <div key={academic.id}>
            <Card className={classes.siteCard}>
              <Card.Img src={academic.logo} className={classes.siteLogo} />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a
                    href={academic.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.siteTitle}
                  >
                    {academic.title}{" "}
                  </a>
                </Card.Title>
                <Card.Subtitle className={classes.siteTags}>
                  {academic.tags}
                </Card.Subtitle>
                <Card.Text>{academic.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;
