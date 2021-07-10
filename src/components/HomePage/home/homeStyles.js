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



  missionInfo: {
    color: "#4E4E4E",
    marginTop: "-10px",
    fontWeight: "600",
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

  // X-large screens
  '@media (min-width: 1200px)': {
    missionTitle: {
      fontSize: "40px",
    },

    missionInfo: {
      fontSize: "18px",
      width: "80%",
    },
  },

  //large screens
  '@media (min-width: 1025px) and (max-width: 1199px)': {
    missionTitle: {
      fontSize: "36px",
    },

    missionInfo: {
      fontSize: "17px",
      width: "80%",
    },
    btnCTA: {
      width: "150px",
      height: "45px",
      fontSize: "17px",
    },
  },

  // smalll screens
  '@media (min-width: 769px) and (max-width: 1024px)': {
    missionTitle: {
      fontSize: "30px",
    },

    missionInfo: {
      fontSize: "14px",
      width: "80%",
    },

    btnCTA: {
      width: "125px",
      height: "35px",
      fontSize: "14px",
    },
    btnLocation: {
      marginLeft: "75px",
      position: 'relative',
      bottom: '50px',
    },
    missionBody: {
      marginLeft: "75px",
      position: 'relative',
      bottom: '50px',
    },
  },
  //tablet
  '@media  (min-width: 650px) and (max-width: 768px)': {
    missionTitle: {
      fontSize: "26px",
      width: '90%',

    },

    missionInfo: {
      fontSize: "14px",
      width: "90%",

    },

    btnCTA: {
      width: "125px",
      height: "35px",
      fontSize: "12px",
    },
    art: {
      display: "none",
    },
    home: {
      display: "grid",
      gridTemplateColumns: "90vw",
      gridTemplateRows: "10vh 40vh 35vh",
    },
    mission: {
      position: 'relative',
      bottom: '75px',
    },

  },
  '@media (max-width: 649px)': {
    missionTitle: {
      fontSize: "22px",
      width: '90%',

    },

    missionInfo: {
      fontSize: "12px",
      width: "90%",

    },

    btnCTA: {
      width: "100px",
      height: "30px",
      fontSize: "10px",
    },
    art: {
      display: "none",
    },
    home: {
      display: "grid",
      gridTemplateColumns: "90vw",
      gridTemplateRows: "10vh 40vh 35vh",
    },
    mission: {
      position: 'relative',
      bottom: '75px',
    },

  },

  art: {
    gridColumnStart: "2",
    gridColumnEnd: "end",
    gridRowStart: "1",
    gridRowEnd: "end",
    overflow: "hidden",
    width: '95%',
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


};

export default homeStyleSheet;
