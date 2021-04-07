const howitworksStyleSheet = {
  table: {
    overflowX: 'hidden',
    display: 'inline-block'
  },
  block1: {
    display: 'grid',
    gridTemplateColumns: '50vw 50vw',
    gridTemplateRows: '60vh',
    gridTemplateAreas: `
    "img1 text1"
    `,
    marginTop: '100px',

  },

  img1: {
    display: 'flex',
    justifyContent: 'center',
  },

  text1: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '30px',
    alignItems: 'center',
  },
  title: {
    fontSize: '45px',
    width: '60%',
    lineHeight: '50px',

  },
  info: {
    width: '60%',
    fontSize: '19px',
    color: '#5A5C5F',
    lineHeight: '2',
  },

  RoadMap: {
    height: '412px',
    marginLeft: '200px',
  },

  block2: {
    display: 'grid',
    gridTemplateColumns: '50vw 50vw',
    gridTemplateRows: '60vh',
    gridTemplateAreas: `
    "text2 img2"
    `,
    marginTop: '100px',
    backgroundColor: '#F6F6F6'
  },

  Modules: {
    height: '412px',
  },

  text2: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '30px',
    alignItems: 'center',

  },

  Wave: {
    position: 'relative',
    top: '120px',
  },
};
export default howitworksStyleSheet;
