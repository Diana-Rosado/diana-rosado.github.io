import { Grid } from "@material-ui/core";

const homeDashboardStyles = {
  logo: {
    gridArea: 'logo',
    height: '10vh',
  },
  logoBtn: {
    fontWeight: 'bold',
    position: "relative",
    top: '2.5vh',
    fontSize: '16px',
    textTransform: 'capitalize',
  },

  nav: {
    gridArea: 'sidebar',
    height: '80vh',
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'column wrap',
  },

  navBtn: {
    fontFamily: 'sans-Serif',
    color: '#AAA5A9',
    padding: '20px',
    textTransform: 'capitalize',
    fontSize: '15px',

    "&:hover": {
      fontWeight: 'bold',
      color: 'black',
    },
  },
  logOut: {
    gridArea: 'footer',
  },

  dashboard: {
    gridColumnStart: '2',
    gridColumnEnd: 'two',
    gridRowStart: 'row1-end',
    gridRowEnd: '2'
  },

  banner: {
    gridArea: 'header',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
  },

  content: {
    height: '350px',
    backgroundColor: '#764BF7',
    width: '70%',
    position: 'relative',
    left: '-100px',
    borderRadius: '20px',
  },

  home: {
    display: 'grid',
    gridTemplateColumns: '20vw 70vw 10vw',
    gridTemplateRows: '10vh 80vh 10vh',
    gridTemplateAreas: `
        "logo header user"
        "sidebar banner ."
        "footer resources . "
      `
  },

  sidebar: {
    backgroundColor: '#F7F7F7',
    height: '100vh',
    boxShadow: '14px 0px 27px -14px rgba(131,131,131,0.63)',
    textAlign: 'center',
    position: 'fixed',
    width: '20vw',
  },

};

export default homeDashboardStyles;