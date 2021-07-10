const contactStyleSheet = {
  "@keyframes myEffect": {
    "0%": {
      transform: "scale (1)",
    },
    "100%": {
      transform: "scale(0.95)",
    },
  },

  "@keyframes popOut": {
    "0%": {
      transform: "scale (0)",
    },
    "50%": {
      transform: "scale(1.2)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },

  // background: { marginTop: "-40px" },
  contactus: {
    borderRadius: "5px",
    backgroundColor: "#E6E8EC",
    padding: "20px",

    maxWidth: "400px",
    minWidth: "390px",
    margin: "0 auto",
    height: "430px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& input, textarea": {
      width: "80%" /* Full width */,
      padding: "12px" /* Some padding */,
      borderRadius: "4px" /* Rounded borders */,
      border: "2px #ccc",
      margin: "6px 1px 16px 30px",
      resize: "none",
      fontFamily: "Sans-Serif",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      outline: "none",
      "&::placeholder": {
        color: "#BFBFBF",
      },
    },
    "& textarea": {
      paddingBottom: "50px",
      outline: "none",
    },

    "& input[type=submit]": {
      backgroundColor: "#7864fb",
      color: "white",
      padding: "20px 20px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginLeft: "10%",
      boxShadow: "none",
      width: "80%" /* Full width */,
      fontWeight: "bold",
    },

    "& input[type=submit]:hover": {
      backgroundColor: "#695cc7",
      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
      animation: "$myEffect 0.3s forwards",
    },
  },

  title: {
    "& p": {
      fontWeight: "800",
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
  // vector2: {
  //   marginTop: "-18%",
  //   "& img": {
  //     width: "100%",
  //     position: "absolute",
  //     zIndex: "-1",
  //   },
  // },

  confirm: {
    height: "325px",
    width: "350px",
    backgroundColor: "#F9F9F9",
    display: "grid",
    alignItems: "center",
    borderRadius: "5px",

    "& img": {
      width: "100%",
      height: "100px",
      animation: "$popOut 1s forwards",
      animationDelay: "0.3s",
    },

    "& p": {
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "-30px",
    },

  },

  '@media (min-width: 769px) and (max-width: 1024px)': {
    title: {
      "& p": {
        fontWeight: "800",
        fontSize: "24px",
        textAlign: "center",
      },
    },
    top: {
      fontWeight: "500",
      fontSize: "20px",
    },
    bottom: {
      fontSize: "14px",
      fontWeight: "300",
      marginTop: "-20px",
    },

    contactus: {
      borderRadius: "5px",
      backgroundColor: "#E6E8EC",
      padding: "5px",

      margin: "0 auto",
      height: "350px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& input, textarea": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "70%" /* Full width */,
        padding: "12px" /* Some padding */,
        borderRadius: "4px" /* Rounded borders */,
        border: "2px #ccc",
        margin: "6px 1px 16px 30px",
        resize: "none",
        fontFamily: "Sans-Serif",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        outline: "none",
        "&::placeholder": {
          color: "#BFBFBF",
        },
      },
      "& textarea": {
        paddingBottom: "50px",
        outline: "none",
      },

      "& input[type=submit]": {
        backgroundColor: "#7864fb",
        color: "white",
        padding: "20px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "none",
        position: 'relative',
        right: '10px',
        width: "78%" /* Full width */,
        fontWeight: "bold",
        marginLeft: '40px',
      },

      "& input[type=submit]:hover": {
        backgroundColor: "#695cc7",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        animation: "$myEffect 0.3s forwards",
      },
    },

  },

  '@media (max-width: 768px)': {
    title: {
      "& p": {
        fontWeight: "800",
        fontSize: "22px",
        textAlign: "center",
      },
    },
    top: {
      fontWeight: "500",
      fontSize: "16px",
    },
    bottom: {
      fontSize: "12px",
      lineHeight: "2",
      fontWeight: "300",
      marginTop: "-20px",
    },

    contactus: {
      borderRadius: "5px",
      backgroundColor: "#E6E8EC",
      height: "350px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "& input, textarea": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "70%" /* Full width */,
        padding: "8px" /* Some padding */,
        borderRadius: "4px" /* Rounded borders */,
        border: "2px #ccc",
        margin: "5px 1px 16px 30px",
        resize: "none",
        fontFamily: "Sans-Serif",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        outline: "none",
        "&::placeholder": {
          color: "#BFBFBF",
        },
      },
      "& textarea": {
        paddingBottom: "50px",
        outline: "none",
      },

      "& input[type=submit]": {
        backgroundColor: "#7864fb",
        color: "white",
        padding: "10px 10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "none",
        position: 'relative',
        right: '10px',
        width: "78%" /* Full width */,
        fontWeight: "bold",
        marginLeft: '40px',
      },

      "& input[type=submit]:hover": {
        backgroundColor: "#695cc7",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        animation: "$myEffect 0.3s forwards",
      },
    },

  },
  Wave: {
    position: "relative",
    top: "35px",
    width: '98.7vw',

  },
};
export default contactStyleSheet;
