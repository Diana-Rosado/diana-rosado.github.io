const howitworksStyleSheet = {


  // "@media (max-width: 780px)": {
  // image: {
  //   display: "none !important",
  // },
  //   text1: {
  //     width: "200% !important",
  //     minWidth: "568px ",
  //     alignItems: "center !important",
  //     marginLeft: "-40px !important",
  //   },

  // },

  "@media (min-width: 769px)": {

  },


  block1: {
    display: "grid",

    gridTemplateColumns: "50vw 50vw",
    gridTemplateRows: "60vh",
    gridTemplateAreas: `
    "image text1"
    `,
    paddingTop: "100px",
    paddingBottom: "50px",
    height: "400px",

  },

  // image: {
  //   display: "flex",
  //   justifyContent: "center",
  //   width: '90%',
  // },

  text1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '48vw',
  },

  block2: {
    display: "grid",

    gridTemplateColumns: "50vw 50vw",
    gridTemplateRows: "60vh",
    gridTemplateAreas: `
    "text1 image"
    
    `,
    marginTop: "-10px",
    backgroundColor: "#F6F6F6",
    height: "400px",
    paddingBottom: "50px",
  },

  Wave: {
    position: "relative",
    marginLeft: "-20px",
    width: '100vw',
    zIndex: '1'
  },

  // x-large monitors


  '@media (min-width: 1601px)': {
    title: {
      fontSize: "45px",
      width: "60%",
      lineHeight: "50px",
      marginBottom: "15px",
    },
    info: {
      width: "60%",
      fontSize: "19px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "flex",
      justifyContent: "center",
      width: '50%',

    },
    block1: {
      display: 'flex',
      flexDirection: 'row',
    },
    block2: {
      display: 'flex',
      flexDirection: 'row',

    },

  },

  '@media (min-width: 1200px) and (max-width: 1600px)': {
    title: {
      fontSize: "45px",
      width: "60%",
      lineHeight: "50px",
      marginBottom: "15px",
    },
    info: {
      width: "60%",
      fontSize: "19px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "flex",
      justifyContent: "center",
      width: '90%',

    },


  },
  //Large screens
  '@media (min-width: 1025px) and (max-width: 1199px)': {
    title: {
      fontSize: "45px",
      width: "60%",
      lineHeight: "50px",
      marginBottom: "15px",

    },
    info: {
      width: "60%",
      fontSize: "19px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "flex",
      justifyContent: "center",
      width: '90%',
    },
  },
  //small screens
  '@media (min-width: 769px) and (max-width: 1024px)': {
    title: {
      fontSize: "30px",
      width: "60%",
      lineHeight: "50px",
      marginBottom: "15px",

    },
    info: {
      width: "60%",
      fontSize: "15px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "flex",
      justifyContent: "center",
      width: '90%',
      position: 'relative',
      top: '50px',
    },
  },

  //ipads, tablets
  '@media  (min-width: 650px) and (max-width: 768px)': {
    title: {
      fontSize: "24px",
      lineHeight: "50px",
      marginBottom: "15px",
      textAlign: 'center',
      zIndex: '99',

    },
    info: {
      width: "80%",
      fontSize: "14px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "none !important",
    },

    block1: {
      display: 'flex',
      justifyContent: 'center',
      height: '70vh',
    },
    block2: {
      display: 'flex',
      justifyContent: 'center',
      height: '70vh',
      alignItems: 'center',

    },
  },
  '@media (min-width: 550px) and (max-width: 649px)': {
    title: {
      fontSize: "14px",
      lineHeight: "50px",
      marginBottom: "15px",
      textAlign: 'center',
    },
    info: {
      width: "80%",
      fontSize: "12px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "none !important",
    },

    block1: {
      display: 'flex',
      justifyContent: 'center',
      height: '70vh',
    },
    block2: {
      display: 'flex',
      justifyContent: 'center',
      height: '70vh',
      alignItems: 'center',

    },
  },
  '@media (max-width: 549px)': {
    title: {
      fontSize: "8px",
      lineHeight: "50px",
      textAlign: 'center',
      width: '110%',
      marginTop: '75px',
    },
    info: {
      width: "80%",
      fontSize: "8px",
      color: "#5A5C5F",
      lineHeight: "2",
    },
    image: {
      display: "none !important",
    },

    block1: {
      display: 'flex',
      justifyContent: 'center',
      height: '70vh',
    },
    block2: {
      display: 'flex',
      justifyContent: 'center',
      height: '70vh',
      alignItems: 'center',

    },
  },


  RoadMap: {},



  // Modules: {},

};
export default howitworksStyleSheet;
