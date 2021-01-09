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

    greet : {
        fontSize: '2.5vw',
        marginLeft: '-3%',
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        
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
        width: '55vw',
        height: '60vh',
        borderRadius: '10px',

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
        width: '30vw',
        margin: 'auto',
        fontSize: '1.2vw',
        display: 'block',
        marginTop: '10%',
    },
    nextBtn: {
        height: '3em',
        width: '12em',
        backgroundColor: '#fe6500',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.4vw',
        fontWeight: 'bold',
        whitespace:'nowrap',

        "&:hover": {
            cursor: 'pointer',
            backgroundColor: "#ed3c00",
            borderRadius: '5px',
        },
    },
    nextCtn: {
        position: 'absolute',
        right: '26%',
        bottom: '15%',

        "@media (max-width:1200px)": {
            bottom: '25%'
          },
    },

    backCtn: {
        position: 'absolute',
        left: '26%',
        bottom: '15%',

        "@media (max-width:1200px)": {
            bottom: '25%'
          },
    },

    backBtn: {
        height: '3em',
        width: '6em',
        backgroundColor: '#aaa5a9',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.3vw',
        fontWeight: 'bold',

        "&:hover": {
            cursor: 'pointer',
            backgroundColor: "#b8b2b6",
            borderRadius: '5px',
        },
    },
    
}

export default interestStyles;