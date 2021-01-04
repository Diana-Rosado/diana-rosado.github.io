const formStyles = {
    body: {
        height: "89.25vh",
        backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
        position: 'relative',
        fontFamily: 'sans-serif',
        
    },
    img: {
        height: "15vh",
        width: '15vh',
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
        fontSize: '38px',
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
        width: '70%',
        height: '70%',
        borderRadius: '10px',

        "& p": {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '30px',
            position: 'relative',
            top:'10%',
            fontWeight: 'bold',
            color: '#f8f8f7'
        },
    },

    form: {
        display: 'grid',
        margin: '9% auto',
        width: '40%',
        height: '60%',
        gridTemplateColumns: 'auto auto',
        gridRow: 'auto auto',
        columnGap: '30px',
        rowGap: '30px',
        alignItems: 'center',
        justifyContent: 'center',

        "& span" : {
            height: '5em',
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
        fontSize: '25px',
        backgroundColor: '#BC98EE',
        borderRadius: '5px',
        height: '5em',
        width: '11em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",  
    },

    nextBtn: {
        height: '3em',
        width: '7em',
        backgroundColor: '#fe6500',
        outline: 'none',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '20px',

        "&:hover": {
            cursor: 'pointer',
            backgroundColor: "#ed3c00",
            borderRadius: '5px',
        },

    },
    nextCtn: {
        position: 'absolute',
        right: '17%',
        bottom: '13%',
        fontWeight: 'bold',

    },
};

export default formStyles;