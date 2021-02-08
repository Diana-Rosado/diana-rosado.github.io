const formStyles = {

    "@keyframes popOut": {
        "0%": {
            transform: "scale (1)"
        },
        "100%": {
            transform: "scale(1.1)",
            color: 'gray',
        }
    },
    background: {
        backgroundColor: '#663CBF',
        height: '100vh',

        "@media (min-height: 200px) and (max-height:700px)": {
            paddingBottom: '5em',
        },
        "@media (max-height:300px)": {
            paddingBottom: '4.5em',
        },
        "@media (min-height:701px) and (max-width:780px)": {
            padding: '1.9em',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '2.5vh 1.2em',
        "& img": {
            width: '6vw',
            height: '3em',
        },
    },
    btnLink: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textTransform: 'capitalize',
    },

    group: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '1em'
    },
    body: {
        backgroundColor: 'white',
        borderRadius: '0.75em',
        height: '80vh',
        width: '93vw',
    },
    container: {
        backgroundColor: '#F4F6F8',
        borderRadius: '0.75em',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    conText: {
        color: '#663CBF',
        fontWeight: 'bold',
        fontSize: '4vh',
    },

    form: {
        display: 'grid',
        margin: '10vh auto',
        gridTemplateColumns: 'auto auto auto',
        gridRow: 'auto auto',
        columnGap: '30px',
        rowGap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '6em',
        width: '93vw',

        "@media (max-width:1300px)": {
            width: '96vw',
        },

        "@media (max-width:1000px)": {
            gridTemplateColumns: 'auto',
            top: '-1em',
            width: '90vw',
        },

        "@media (max-height:300px)": {
            top: '-.75em',
            rowGap: '8vh',
        },
    },

    btn: {
        backgroundColor: '#EBEBEB',
        borderRadius: '5px',
        height: '14vh',
        width: '23em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#818181',
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",

        "@media (max-width:1300px) ": {
            height: '15vh',
            fontSize: '1.2vw',
        },

        "@media (max-width:1000px) ": {
            height: '10vh',
            fontSize: '14px',
        },

        "@media (max-height:300px)": {
            fontSize: '1.5vw',

        },
    },
    btnColor: {
        color: '#663CBF',
    },

    next: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        bottom: '-20vh',
        backgroundColor: 'red',

        "@media (max-width:1000px)": {
            position: 'relative',
            left: '1vw',
            bottom: '22vh',
        },

        "@media (max-width:1000px) ": {
            justifyContent: 'center',
            bottom: '4vh',

        },
    },
    nextBtn: {
        marginRight: '5vw',
        textTransform: 'capitalize',
        color: '#663CBF',
        fontWeight: 'bold',
        border: '3px solid #663CBF ',
        fontSize: '1.3vw',
        width: '7em',
        borderRadius: '0.5em',
        position: 'absolute',
        zIndex: '1',

        "&:hover": {
            backgroundColor: '#663CBF',
            color: 'white',
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        },
        "@media (max-width:1000px) ": {
            width: '18em',
            height: '10vh',
            fontSize: '16px'
        },

    },

    skip: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '6vw',


    },
    skipBtn: {
        fontFamily: 'sans-serif',
        color: '#B5B5B5',
        position: 'absolute',
        bottom: '30px',
        zIndex: '100',

        "&:hover": {
            animation: '$popOut 0.3s forwards'
        },
        "@media (max-width:1000px) ": {
            position: 'relative',
            bottom: '-40px',
        },
    },

};

export default formStyles;