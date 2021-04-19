const financialStyles = {
    dashboard: {
        position: 'relative',
        left: '50px',
    },
    milestone: {
        display: 'grid',
        gridTemplateColumns: '65vw ',
        gridTemplateRows: '10vh 65vh 10vh',
        gridTemplateAreas: `
            " header "
            " content "
            " footer"
          `,
        backgroundColor: '#06AD35',
        borderRadius: '15px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '25px',
        color: 'white',
    },
    footer: {
        backgroundColor: 'rgba(255,255,255,0.20)',
        borderRadius: '15px',
    },

    getStarted: {
        display: ' flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%',
        marginRight: '50px',
    },
    getStartedBtn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
    },
    money: {
        height: '90%',
        width: '90%',
        backgroundColor: 'white',
        borderRadius: '15px',

    },
    moneyImg: {
        height: '512px',
        width: '512px',
        position: 'relative',
        bottom: '75px',
    },

    Module: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    titleModule: {
        height: '50px',
        display: 'grid',
        alignItems: 'center',
        borderBottom: '2px solid #C4C4C4',
        width: '80%',
    },
    titleText: {
        fontSize: '20px',
    },
    blocks: {
        display: 'grid',
        gridTemplateColumns: '16vw 16vw 17vw ',
        gridTemplateRows: '20vh 20vh',
        gridTemplateAreas: `
            " block1 block2 block3 "
            " block4 block5 block6 "
          `,
        textAlign: 'left',

    },

    values: {
        "& label": {
            fontSize: '17px',
            fontFamily: 'sans-serif',
            color: '#4D4D4D'
        },

        "& input": {
            width: '150px',
            marginTop: '15px',
            height: '30px',
            border: '1px solid #9F9F9F',
            borderRadius: '3px',

            "&::placeholder": {
                color: "#CBCBCB",
                marginLeft: '20px',
            },
        },
    },

    total: {
        border: '1px solid #9F9F9F',
        height: '45px',
        width: '150px',
        marginLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '18px',
        borderRadius: '3px'
    },
    estimation: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

}


export default financialStyles;