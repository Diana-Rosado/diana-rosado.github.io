import React from "react";
import blankStyles from "./blankStyles.js";
import {
  makeStyles,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import Clipboard from "./Clipboard.svg";

const useStyles = makeStyles(blankStyles);
function Blank() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p>Learning Modules</p>
      <Card style={{ height: "100%", width: "250px" }} className={classes.fin}>
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              //   component="h2"
              //   style={{ color: "white" }}
            >
              0% Completion
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <img src={Clipboard} alt={"background"}></img>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" style={{ color: "white" }}>
            Financial Planning
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Blank;
