const resourceStyles = {
  header: {
    backgroundColor: '#663CBF',
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
  siteList: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    columnGap: '150px',
    rowGap: '50px',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',

    "@media (max-width:800px)": {
      gridTemplateColumns: 'auto',
    },
  },
  siteCard: {
    width: "23rem",
    height: "415px",
    marginBottom: "12px",
    backgroundColor: "white",
    borderRadius: '0.5em',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    fontFamily: 'sans-serif',
    display: 'grid',
  },

  siteLogo: {
    textAlign: 'center',
    display: 'flex',
    height: '150px',
    justifyContent: 'center',
    padding: '10px',
  },

  siteTitle: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
    fontSize: "25px",
    margin: '6%',
  },
  siteTags: {
    fontSize: "15px",
  },

  siteText: {
    margin: '6%',
    fontSize: '17px',
    color: '#666666'
  },

  siteBtn: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    border: '3px solid #663CBF ',
    // fontSize: '1.3vw',
    // width: '10em',
    // borderRadius: '0.5em',
    // whitespace: 'nowrap',
    // marginLeft: '5%',
    color: '#663CBF',

    "& a": {
      textDecoration: 'none',
      color: 'inherit'
    },
    "&:hover": {
      backgroundColor: '#663CBF',
      color: 'white',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },


  },
  refresh: {
    position: 'relative',
    right: '14vw',
    top: '30vh',

    "@media (max-width:800px)": {
      right: '5vw',
      top: '33vh',
    },
  },
  refreshBtn: {
    textTransform: 'capitalize',
    color: 'white',
    fontWeight: 'bold',
    border: '2px solid white ',
    fontSize: '.9vw',
    width: '12em',
    borderRadius: '0.5em',
    whitespace: 'nowrap',

    "&:hover": {
      color: 'black',
      backgroundColor: 'white',
    },

  },
};

export default resourceStyles;
