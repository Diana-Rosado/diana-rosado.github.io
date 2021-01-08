const interestStyles = {
    body: {
        height: "89.25vh",
        backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
        position: 'relative',
        fontFamily: 'sans-serif',
        
    },
    img: {
        height: "8vw",
        width: '8vw',
        position: 'absolute',
        left: '15%',
        
    },
    link: {
        backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    },
    btnLink : {
        color: 'white',
        fontWeight: '700',
        fontSize: '20px',
        marginLeft: "43px",
        marginTop: "30px",
        textTransform: 'capitalize'
    },
    container : {
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
    },

    ctn1: {
        background: 'rgba(255 , 255, 255, 0.25)',
        margin: 'auto',
        design: 'block',
        width: '70%',
        height: '70%',
        borderRadius: '10px',
        marginTop: '18vh',

        "& p": {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2.2vw',
            position: 'relative',
            top:'10%',
            fontWeight: 'bold',
            color: '#f8f8f7'
        },
    },

    form: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#BC98EE',
        marginLeft: '25%',
        marginTop: '10%',
    },
    nextBtn: {
        height: '3em',
        width: '7em',
        backgroundColor: '#fe6500',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.3vw',
        fontWeight: 'bold',

        "&:hover": {
            cursor: 'pointer',
            backgroundColor: "#ed3c00",
            borderRadius: '5px',
        },
    },
    nextCtn: {
        position: 'absolute',
        right: '18%',
        bottom: '15%',

        "@media (max-width:1200px)": {
            bottom: '25%'
          },
    },

    backCtn: {
        position: 'absolute',
        left: '18%',
        bottom: '15%',

        "@media (max-width:1200px)": {
            bottom: '25%'
          },
    },

    backBtn: {
        height: '3em',
        width: '7em',
        backgroundColor: '#fe6500',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.3vw',
        fontWeight: 'bold',

        "&:hover": {
            cursor: 'pointer',
            backgroundColor: "#ed3c00",
            borderRadius: '5px',
        },
    },
    
}

export default interestStyles;