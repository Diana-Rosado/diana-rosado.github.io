const interestStyles = {
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

        "@media (max-width:850px)": {

        },
    },
    conText: {
        color: '#663CBF',
        fontWeight: 'bold',
        fontSize: '4vh',

        "@media (max-width:850px)": {
            fontSize: '2.5vh',
            padding: '10%',
        },
    },

    form: {
        width: '40vw',
        margin: '10vh auto',
        fontSize: '0.9rem',
        display: 'block',
        marginTop: '5%',
    },

    next: {
        position: 'relative',
        width: '7em',
        right: '-45vw',
        top: '11vh',
        "@media (max-width:850px)": {
            position: 'relative',
            right: '-43vw',
            top: '7vh'
        },
        "@media (max-height:400px) and (max-width: 400px)": {
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'relative',
            top: '-15vh',
            marginRight: '200px'
        },
    },
    nextBtn: {
        textTransform: 'capitalize',
        color: '#663CBF',
        fontWeight: 'bold',
        border: '3px solid #663CBF ',
        fontSize: '1.3vw',
        width: '12em',
        borderRadius: '0.5em',
        whitespace: 'nowrap',

        "&:hover": {
            cursor: 'pointer',
            color: 'white',
            backgroundColor: "#663CBF",
            borderRadius: '0.5em',
        },

        "@media (max-height:400px)": {
            position: 'fixed',
            right: '25vw'
        },
    },

    backBtn: {
        marginRight: '5vw',
        textTransform: 'capitalize',
        color: '#663CBF',
        fontWeight: 'bold',
        border: '3px solid #663CBF ',
        fontSize: '1.3vw',
        width: '7em',
        borderRadius: '0.5em',

        "&:hover": {
            backgroundColor: '#663CBF',
            color: 'white',
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        },
    },
    back: {
        position: 'relative',
        left: '5vw',
        bottom: '-33vh',
        width: '50%',

        "@media (max-width:850px)": {
            position: 'relative',
            bottom: '-22vh',
            left: '5vw',
        },
    },

}

export default interestStyles;