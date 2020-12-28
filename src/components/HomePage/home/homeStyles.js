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
      
      '@media (max-width:1300px)' : {
        fontSize: '67px',

        '@media (max-width:600px)' : {
          fontSize: '50px',
      },  
    },

    },
    "& p": {
      fontSize: "35px",
      paddingRight: "40px",
      marginTop: "0px",

      '@media (max-width:1300px)' : {
        fontSize: '33px',
        width: '100%',
        margin: '0 auto',
    },
    '@media (max-width:600px)' : {
      fontSize: '30px',
      width: '100%',
      margin: '0 auto',
  },

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

      '@media (max-width:1300px)' : {
        height: "50px",
        width: "220px",
        fontSize: "20px",
        borderRadius: "40px",
        marginTop: '20px',
        
        
    },
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
        // paddingRight: "50px",
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
    marginTop: "-145px",
    "& img": {
      width: '100%',
      position: 'absolute',
      zIndex: '1',
    },
  },
};

export default homeStyleSheet;
