const SignInStyles = {

    "@keyframes colorChange": {
        "0%": {
            backgroundColor: '#764bf7',
        },
        "100%": {
            backgroundColor: '#825bf8',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',
        top: '25px',
        right: '50px',
    },

    login: {
        height: '40px',
        width: '75px',
        outline: 'none',
        border: 'solid 3px #c2c1c2',
        color: '#7864FB',
        backgroundColor: 'white',
        borderRadius: '10px',
        fontWeight: 'bold',
        cursor: 'pointer',

        "&:hover": {
            backgroundColor: '#e2e2e2',
        },
    },

    Imagication: {
        fontSize: '18px',
        fontWeight: 'bold',
        position: 'relative',
        top: '50px',
        left: '50px',
        color: '#7864FB',
        zIndex: '3',
    },

    body: {
        display: 'grid',
        textAlign: 'center',
        marginTop: '100px',
    },

    form: {
        display: 'grid',
        gridTemplateColumns: 'auto',
        margin: 'auto',
        width: '400px',
        height: '300px',
    },
    info: {
        border: ' solid 3px #e2e2e2',
        borderRadius: '10px',
        padding: '10px 20px',
        backgroundColor: '#f3f3f4',
        outline: 'none',

        "&::placeholder": {
            color: "#99989a",
            fontSize: '15px',
        },
    },

    submit: {
        backgroundColor: '#7864FB',
        color: 'white',
        borderRadius: '10px',
        position: 'relative',
        top: '20px',
        height: '50px',
        border: 'solid #7864FB',
        fontWeight: 'bold',
        fontSize: '18px',

        "&:hover": {
            backgroundColor: '#8f7ffc',
            cursor: 'pointer',
            animation: '$colorChange 0.5s forwards',
            outline: 'none',
            boxShadow: '-5px 7px 23px -4px rgba(0,0,0,0.37)',
        },
    }

};

export default SignInStyles;
