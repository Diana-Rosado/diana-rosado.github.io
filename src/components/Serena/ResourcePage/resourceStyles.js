const resourceStyles = {
  header: {
    backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    display: "flex",
    alignItems: "flex-start",
    height: "28rem",
    zIndex: "-1",
  },
  btnLink: {
    color: "white",
    fontWeight: "700",
    fontSize: "20px",
    marginLeft: "43px",
    marginTop: "30px",
    textTransform: "capitalize",
  },
  survey_container: {
    backgroundColor: "#E5E5E5",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    padding: "3vh ",
    margin: "80px auto 50px auto",
  },
  img: {
    height: "3rem",
    width: "5rem",
  },

  grid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "50vh",
    width: "100vw",
    marginLeft: "-10%",

    "@media (max-width:600px)": {
      marginLeft: "10px",
    },
  },

  grid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "50vh",
    width: "100vw",
    marginLeft: "-10%",

    "@media (max-width:600px)": {
      marginLeft: "10px",
    },
  },

  form: {
    width: "40vw",
    fontSize: "0.9rem",
    zIndex: "2",
  },

  curve: {
    marginTop: "-13.5%",
    display: "flex",
    alignItems: "flex-end",
    "& img": {
      zIndex: "1",
      width: "100%",
    },
  },
  cards: {
    backgroundColor: "#F4F4F4",
    display: "flex",
    alignItems: "flex-start",
    height: "20em",
  },
};

export default resourceStyles;
