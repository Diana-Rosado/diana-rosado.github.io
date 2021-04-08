

const homeDashboardStyles = {


  welcome: {
    width: '70%',
    fontSize: '30px',
    position: 'relative',
    left: '100px',
  },

  dashboard: {
    gridColumnStart: '1',
    gridColumnEnd: 'end',
    gridRowStart: '1',
    gridRowEnd: 'end'
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
    width: '80%',
    position: 'relative',
    borderRadius: '20px',
  },

  information: {
    color: 'white',
    width: '30%',
    textAlign: 'center',
    height: '100%',
    position: 'relative',
    left: '50px',

  },

  text: {
    position: 'relative',
    top: '30px',
    fontSize: '35px',
    // backgroundColor: 'green',
  },

  start: {
    position: 'relative',
    top: '60px',
  },

  startBtn: {
    backgroundColor: '#35CD8E',
    width: '200px',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '10px',
    height: '50px',
    fontSize: '18px',

    "&:hover": {
      backgroundColor: '#44DC9D',
    },
  },

  home: {
    display: 'grid',
    gridTemplateColumns: '65vw ',
    gridTemplateRows: '10vh 80vh 10vh',
    gridTemplateAreas: `
        " header "
        " banner "
        " resources"
      `
  },


  startImg: {
    width: '100px',
    height: '100px',
    position: 'relative',
    top: '-350px',
    left: '350px',
  },


};

export default homeDashboardStyles;