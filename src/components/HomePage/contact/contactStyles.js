const contactStyleSheet = {
  contactus: {
    borderRadius: "5px",
    backgroundColor: "#E6E8EC",
    padding: "20px",
    width: "32%",
    maxWidth: "400px",
    minWidth: "390px",
    margin: "0 auto",

    "& input, textarea": {
      width: "80%" /* Full width */,
      padding: "12px" /* Some padding */,
      borderRadius: "4px" /* Rounded borders */,
      border: "2px #ccc",
      margin: "6px 1px 16px 30px",
      resize: "none",
      fontFamily: "Sans-Serif",
      boxShadow: "0px 3px rgb(0,0,0,0.25)",
      "&::placeholder": {
        color: "#BFBFBF",
      },
    },
    "& textarea": {
      paddingBottom: "50px",
      outline: "none",
    },

    "& input[type=submit]": {
      backgroundColor: "#653CBE",
      color: "white",
      padding: "20px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: "10%",
      boxShadow: "none",
      width: "80%" /* Full width */,
    },
    "& input[type=submit]:hover": {
      backgroundColor: "#5A39AE",
    },
  },
  title: {
    "& p": {
      color: "#653CBE",
      fontWeight: "600",
      fontSize: "30px",
      textAlign: "center",
    },
  },
  top: {
    fontWeight: "500",
    fontSize: "24px",
  },
  bottom: {
    fontSize: "14px",
    fontWeight: "300",
    marginTop: "-20px",
  },
  tab: {
    margin: "0px 0px 30px 30px ",
  },
  vector2: {
    marginTop: "-18%",
    "& img": {
      width: "100%",
      position: 'absolute',
      zIndex: '-1',
    },
  },
};
export default contactStyleSheet;
