import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import financialStyles from "./financialStyles.js";
import { Button } from "@material-ui/core";
import Money from "../../../Icons/Money.svg";
import CollegeList from "./CollegeList.js";
import CollegeCount from "./CollegeCount.js";
import AddCollege from "./AddCollege.js";
import { CollegeContext } from "./CollegeContext.jsx";
import Calculator from "./Calculator.jsx";
import College from "./College.js";

const useStyles = makeStyles(financialStyles);

function FinancialMS() {
  const [count, setCount] = useState(0);
  const [visible, hidden] = useState(true);
  const [content, setContent] = useState(false);

  const components = [
    <div>
      <Questions />
    </div>,
    <div>
      <CollegeList />
    </div>,
    <div>3</div>,
  ];

  function Disappear() {
    hidden(false);
    setContent(true);
    // document.getElementsByClassName("money").style.overflow = "scroll";
    // document.money.style.overflow = "scroll";
    // ".money".style.overflow = "hidden";
  }

  function Questions() {
    return (
      <div className={classes.Module}>
        <section className={classes.titleModule}>
          <div className={classes.titleText}>
            Enter the college's information
          </div>
        </section>
        <br></br>
        {/* <CollegeCount /> */}
        <section className={classes.contentModule}>
          {/* <AddCollege /> */}
          <Calculator />
          {/* <CollegeList /> */}
        </section>
      </div>
    );
  }

  const classes = useStyles();
  return (
    <div>
      <section className={classes.dashboard}>
        <div className={classes.milestone}>
          <section className={classes.header}>
            <div>Financial Planning</div>
          </section>
          <section className={classes.content}>
            <div className={classes.money}>
              {/* {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}
                            {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>} */}
              {visible ? (
                <img src={Money} alt={"Money"} className={classes.moneyImg} />
              ) : null}
              {content ? components[count] : null}
            </div>
          </section>
          <section className={classes.footer}>
            <div className={classes.getStarted}>
              {visible ? (
                <Button className={classes.getStartedBtn} onClick={Disappear}>
                  Get Started{" "}
                </Button>
              ) : null}
              {content ? (
                <div>
                  {count > 0 && (
                    <Button
                      className={classes.getStartedBtn}
                      onClick={() => setCount(count - 1)}
                    >
                      prev
                    </Button>
                  )}
                  {count < components.length - 1 && (
                    <Button
                      className={classes.getStartedBtn}
                      onClick={() => setCount(count + 1)}
                    >
                      next
                    </Button>
                  )}
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default FinancialMS;
