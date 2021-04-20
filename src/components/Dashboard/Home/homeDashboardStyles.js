const homeDashboardStyles = {
  home: {
    display: "grid",
    gridTemplateColumns: "80vw ",
    gridTemplateRows: "10vh 80vh 10vh",
    gridTemplateAreas: `
        " header "
        " banner "
        " resources "
      `,
  },
  "@media (max-width: 1105px)": {
    img1: {
      width: "43vw !important",
    },
  },
  "@media (max-width: 965px)": {
    startImg: {
      display: "none",
    },
    information: {
      width: "400px !important",
      left: " 0px !important",
    },
    content: {
      width: "340px !important",
      marginLeft: "auto !important",
      marginRight: "auto",
    },
    dashboard: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    welcome: {
      paddingLeft: "0px !important",
    },
  },

  dashboard: {
    gridColumnStart: "1",
    gridColumnEnd: "end",
    gridRowStart: "1",
    gridRowEnd: "end",
  },
  welcome: {
    display: "flex",
    paddingLeft: "100px",
    fontSize: "30px",
  },
  banner: {
    display: "flex",
    justifyContent: "center",
  },

  content: {
    gridArea: "header",
    height: "380px",
    backgroundColor: "#764BF7",
    width: "85%",
    position: "relative",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "5%",
  },

  information: {
    color: "white",
    width: "30%",
    textAlign: "center",
    height: "100%",
    position: "relative",
    left: "30px",
  },

  text: {
    position: "relative",
    top: "30px",
    fontSize: "35px",
  },

  start: {
    position: "relative",
    top: "60px",
  },

  startBtn: {
    backgroundColor: "#35CD8E",
    width: "200px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "10px",
    height: "50px",
    fontSize: "18px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#44DC9D",
    },
  },
};

export default homeDashboardStyles;
