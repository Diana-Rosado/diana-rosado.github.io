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
  link: {
      '@media (max-width:650px)' : {
        display: 'none',
        position: 'relative',
    },
  },
  bar: {
    backgroundColor: 'rgba(255, 0, 0, 0)',
    border: 'none',
    outline :'none',
    "& img": {
      width: "25px",
      height: "25px",
      marginTop: '-10px',
      paddingRight: "20px",
    },

    "@media (min-width:650px)": {
      display: "none",
    },
  },
  dropdownContent: {
    display: 'none',
    position: 'relative', // changed
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',

    "& a": {
      float: 'none',
      display: 'block',
      padding: '12px 16px',
      textDecoration: 'none',
    },
  },

};

export default navbarStyleSheet;
