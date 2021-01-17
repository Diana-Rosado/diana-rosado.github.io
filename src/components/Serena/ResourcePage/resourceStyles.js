const resourceStyles = {
  back: {
    backgroundColor: "#E6E8EC",
  },
  header: {
    backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    display: "flex",
    alignItems: "flex-start",
    height: "20rem",
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
    margin: "50px auto 50px auto",
  },
  img: {
    height: "3rem",
    width: "5rem",
  },

  textCtn: {
    width: "40vw",
  },
  text: {
    fontSize: "0.9em",
    fontWeight: "600",
    color: "#4d4d4d",
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
  },

  siteList: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  siteCard: {
    width: "18rem",
    height: "415px",
    marginBottom: "12px",
    textAlign: "center",
    backgroundColor: "white",
  },
  siteLogo: {
    // height: "auto",
    maxHeight: "250px",
    // width: "auto",
    maxWidth: "250px",
  },
  siteTitle: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    fontSize: "28px",
  },
  siteTags: {
    fontSize: "15px",
  },
};

export default resourceStyles;
