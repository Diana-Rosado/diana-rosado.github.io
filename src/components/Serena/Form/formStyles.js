const formStyles = {
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

        "@media (max-width:780px)": {
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

        "@media (max-width:780px) ": {
            height: '15vh',
            fontSize: '2.5vw',
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

        "@media (max-width:780px)": {
            position: 'relative',
            bottom: '22vh',
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
    // form: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     position: 'relative',
    //     top: '13em',
    // },

    // body: {
    //     height: "89.25vh",
    //     backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    //     position: 'relative',
    //     fontFamily: 'sans-serif',

    // },
    // img: {
    //     height: "8vw",
    //     width: '8vw',
    //     position: 'absolute',
    //     left: '15%',

    // },
    // link: {
    //     backgroundImage: "linear-gradient(to right, #663CC0, #663CBF, #333399)",
    // },
    // btnLink : {
    //     color: 'white',
    //     fontWeight: '700',
    //     fontSize: '20px',
    //     marginLeft: "43px",
    //     marginTop: "30px",
    //     textTransform: 'capitalize'
    // },
    // greet : {
    //     fontSize: '2.5vw',
    //     marginLeft: '10%',
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontFamily: 'sans-serif',

    // },
    // container : {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     margin: 'auto',
    // },

    // ctn1: {
    //     background: 'rgba(255 , 255, 255, 0.25)',
    //     margin: 'auto',
    //     design: 'block',
    //     width: '70vw',
    //     height: '60vh',
    //     borderRadius: '10px',

    //     "& p": {
    //         display: 'flex',
    //         justifyContent: 'center',
    //         fontSize: '2vw',
    //         position: 'relative',
    //         top:'10%',
    //         fontWeight: 'bold',
    //         color: '#f8f8f7'
    //     },
    // },



    //     "& span" : {
    //         height: '15vh',
    //         width: '11em',
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderRadius: '5px',
    //     },

    //     "& input[type = radio]" : {
    //         opacity: '0',
    //         position: 'fixed',
    //         width: '0',

    //         "&:checked + span": {
    //             backgroundColor: '#8E49C5',
    //         },

    //         "&:hover + span": {
    //             backgroundColor: '#A47ADE',
    //             cursor: 'pointer',
    //         },
    //     },
    // },


    // nextBtn: {
    //     height: '2em',
    //     width: '5em',
    //     backgroundColor: '#fe6500',
    //     outline: 'none',
    //     border: 'none',
    //     borderRadius: '5px',
    //     color: 'white',
    //     fontSize: '1.3vw',
    //     fontWeight: 'bold',

    //     "&:hover": {
    //         cursor: 'pointer',
    //         backgroundColor: "#ed3c00",
    //         borderRadius: '5px',
    //     },

    //     "@media (max-height:400px)": {
    //         position: 'fixed',
    //         right: '15vw'

    //       },

    // },
    // nextCtn: {
    //     position: 'absolute',
    //     right: '18%',
    //     bottom: '15%',

    //     "@media (max-width:1200px)": {
    //         bottom: '25%'

    //       },
    // },
};

export default formStyles;