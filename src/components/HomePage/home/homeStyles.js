const homeStyleSheet = {
  "@keyframes shrink": {
    "0%": {
      transform: "scale (1)",
    },
    "100%": {
      transform: "scale(0.95)",
    },
  },
  home: {
    display: "grid",
    gridTemplateColumns: "55vw 45vw",
    gridTemplateRows: "10vh 55vh 35vh",
    gridTemplateAreas: `
    "header ."
    "mission art"
    "mission art"
    `,
  },

  header: {
    fontWeight: "bold",
  },

  title: {
    marginLeft: "75px",
  },

  mission: {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "2",
    gridRowEnd: "3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
    height: "500px",
  },

  missionBody: {
    marginLeft: "75px",
    marginBottom: "50px",
  },

  missionTitle: {
    fontSize: "40px",
  },

  missionInfo: {
    fontSize: "18px",
    color: "#4E4E4E",
    marginTop: "-10px",
    width: "80%",
    fontWeight: "600",
  },
  email: {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "3",
    gridRowEnd: "end",
  },

  form: {
    marginLeft: "50px",
  },

  // formInput: {
  //   height: "20px",
  //   width: "50%",
  //   padding: "12px" /* Some padding */,
  //   borderTopLeftRadius: "4px" /* Rounded borders */,
  //   borderBottomLeftRadius: "4px",
  //   border: "2px #ccc",
  //   margin: "6px 1px 16px 30px",
  //   fontFamily: "Sans-Serif",
  //   boxShadow: "1px 0px 12px 0px rgba(0,0,0,0.2)",
  //   outline: "none",
  // },

  // submit: {
  //   height: "45px",
  //   width: "100px",
  //   backgroundColor: "#764BF7",
  //   color: "white",
  //   border: "none",
  //   outline: "none",

  //   "&:hover": {
  //     textDecoration: "underline",
  //     cursor: "pointer",
  //     animation: "$shrink 0.3s forwards",
  //   },
  // },

  art: {
    gridColumnStart: "2",
    gridColumnEnd: "end",
    gridRowStart: "1",
    gridRowEnd: "end",
    overflow: "hidden",
  },
  "@media (max-width: 720px)": {
    art: {
      display: "none",
    },
    mission: {
      width: "175%",
    },
  },

  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  background: {
    width: "40vw",
    position: "relative",
    height: "90vh",
    borderRadius: "10px",
    top: "30px",
  },

  btnLocation: {
    marginLeft: "75px",
  },
  btnCTA: {
    backgroundColor: "#7864FB",
    color: "white",
    textTransform: "capitalize",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    fontSize: "18px",

    "&:hover": {
      backgroundColor: "#695cc7",
      boxShadow: "3px 6px 5px -6px #000000",
    },
  },
};

export default homeStyleSheet;
