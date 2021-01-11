const formStyles = {
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
        marginLeft: '10%',
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
        width: '70vw',
        height: '60vh',
        borderRadius: '10px',

        "& p": {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2vw',
            position: 'relative',
            top:'10%',
            fontWeight: 'bold',
            color: '#f8f8f7'
        },
    },

    form: {
        display: 'grid',
        margin: '10vh auto',
        width: '40%',
        height: '60%',
        gridTemplateColumns: 'auto auto',
        gridRow: 'auto auto',
        columnGap: '30px',
        rowGap: '30px',
        alignItems: 'center',
        justifyContent: 'center',


        "& span" : {
            height: '15vh',
            width: '11em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
        },

        "& input[type = radio]" : {
            opacity: '0',
            position: 'fixed',
            width: '0',

            "&:checked + span": {
                backgroundColor: '#8E49C5',
            },

            "&:hover + span": {
                backgroundColor: '#A47ADE',
                cursor: 'pointer',
            },
        },
    },
    
    btn: {
        fontSize: '1.5vw',
        backgroundColor: '#BC98EE',
        borderRadius: '5px',
        height: '15vh',
        width: '11em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",  
    },

    nextBtn: {
        height: '2em',
        width: '5em',
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

        "@media (max-height:400px)": {
            position: 'fixed',
            right: '15vw'
            
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
};

export default formStyles;