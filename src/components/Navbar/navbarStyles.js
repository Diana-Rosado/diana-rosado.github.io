const navbarStyleSheet = {
  navbar: {
    backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "27px",
    

    "& ul": {
      flex: 1,
      maxWidth: "50%",
      display: "flex",
      justifyContent: "space-evenly",

      '@media (max-width:1300px)' : {
        maxWidth: '60%',
    },

    '@media (max-width:700px)' : {
      maxWidth: '70%',
  },
      "& li": {
        display: "inline",
        margin: 0,
        padding: 0,
      },
    },
    "& a": {
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
    },
    "& img": {
      height: "50px",
      width: "150px",
      // marginLeft: "50px",
      // marginTop: "70px",
    },
  },

  home: {
    marginLeft: "50px",
    marginTop: "10px",
  },

  // "@media (min-width: 1125px)": {
  //   bar: {
  //     display: "none",
  //   },
  // },
  "@media (max-width: 1125px)": {
    topics: {
      display: "none",
    },
  },
};

export default navbarStyleSheet;
