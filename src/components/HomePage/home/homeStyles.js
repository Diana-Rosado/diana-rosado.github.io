const homeStyleSheet = {
  home: {
    height: "568px",
    backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    display: "flex",
  },
  intro: {
    color: "white",
    paddingTop: "100px",
    flex: "1",
    "& div": {
      margin: "auto",
      width: "60%",
    },
    "& h1": {
      fontSize: "76px",
      marginBottom: "0px",
    },
    "& p": {
      fontSize: "35px",
      paddingRight: "40px",
      marginTop: "0px",
    },
    "& button": {
      backgroundColor: "#4928A5",
      border: "none",
      borderRadius: "50px",
      outline: "none",
      height: "60px",
      width: "230px",
      color: "white",
      fontSize: "25px",
      fontWeight: "bold",
    },
  },
  homeImage: {
    flex: "1",
    "& div": {
      backgroundColor: "rgba(97,97,203,0.63)",
      height: "400px",
      width: "400px",
      borderRadius: "50%",
      marginLeft: "80px",
      marginTop: "90px",
      "& img": {
        height: "320px",
        width: "420px",
        marginTop: "40px",
      },
    },
  },
  "@media (max-width: 1125px)": {
    homeImage: {
      display: "none",
    },
  },
  vector1: {
    // marginTop: "-145px",
    marginTop: "-11.5%",
    "& img": {
      width: "100%",
    },
  },
};

export default homeStyleSheet;
