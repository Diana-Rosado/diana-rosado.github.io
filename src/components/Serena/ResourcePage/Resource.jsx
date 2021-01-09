import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import resourceStyles from "./resourceStyles.js";
import { UserContext } from "../../currentData.jsx";

const useStyles = makeStyles(resourceStyles);

function Resource() {
  const user = useContext(UserContext);
  const classes = useStyles();

  return <div>this is the resource page {user.grade}</div>;
}

export default Resource;
