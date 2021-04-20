const howitworksStyleSheet = {
  // table: {},
  "@media (max-width: 780px)": {
    image: {
      display: "none !important",
    },
    text1: {
      width: "200% !important",
      minWidth: "568px ",
      alignItems: "center !important",
      marginLeft: "-40px !important",
    },
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

  image: {
    display: "flex",
    justifyContent: "center",
  },

  text1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "115%",
  },
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

  RoadMap: {},

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
    "& $text1": {
      marginLeft: "3vw",
      alignItems: "flex-start",
      minWidth: "640px",
    },
  },

  // Modules: {},
  Wave: {
    position: "relative",
    marginLeft: "-20px",
  },
};
export default howitworksStyleSheet;
