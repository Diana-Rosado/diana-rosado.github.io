const gradeStyles = {
    background: {
        backgroundColor: '#663CBF',
        height: '100%',

        "@media (min-height: 200px) and (max-height:900px)": {
            paddingBottom: '2.5em',
        },
        "@media (max-height:200px)": {
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

        "@media (max-width:780px)": {
            gridTemplateColumns: 'auto',
            top: '-1em',
            padding: '0em',
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
        fontSize: '5vh',
    },

    form: {
        display: 'grid',
        margin: '5vh auto',
        // width: '40%',
        // height: '60%',
        gridTemplateColumns: 'auto auto',
        gridRow: 'auto auto',
        columnGap: '30px',
        rowGap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '2em',
        width: '93vw',
        zIndex: '1',

        "@media (max-width:850px)": {
            gridTemplateColumns: 'auto',
            top: '-1em',
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

        "@media (max-width:850px) ": {
            height: '10vh',
            fontSize: '2vw',
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
        marginLeft: '80vw',
        top: '6vh',

        "@media (max-width:780px)": {
            position: 'relative',
            top: '-11vh',
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

        "&:hover": {
            backgroundColor: '#663CBF',
            color: 'white',
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        },
    },
    back: {
        position: 'relative',
        left: '5vw',
        bottom: '-55vh',
        width: '10%',
        zIndex: '2',

        "@media (max-width:780px)": {
            position: 'relative',
            bottom: '-55vh',
            left: '5vw',
            width: '10%',
        },
    },
    filter: {
        float: 'left',
        display: 'inline',
        backgroundColor: 'red',
    },

};

export default gradeStyles;