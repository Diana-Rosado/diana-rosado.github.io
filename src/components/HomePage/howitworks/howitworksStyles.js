const howitworksStyleSheet = {
    mission: {
        backgroundColor: '#653CBE',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        "& h1": {
            fontSize: '30px',
            paddingTop: '50px',
        },
    },
    howitworks: {
        fontSize: '16px',
        display: 'inline-block',
        width: 'calc(100%/4.5)',
        
        '@media (max-width:740px)' : {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '35%',
        },

        "& img": {
            paddingTop: '30px',
            width: '133px',
            height: '175px',

            '@media (max-width:1300px)' : {
                width: '100px',
                height: '133px',
            },

        },
        "& p": {
            paddingTop: '15px',
            width: '350px',
            paddingBottom: '100px',

            '@media (max-width:1300px)' : {
                fontSize: '15px',
                width: '80%',
            },
        }
    },
};
export default howitworksStyleSheet;