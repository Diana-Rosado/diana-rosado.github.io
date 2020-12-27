const missionStyleSheet = {
    mission: {
        height: '300px',
        color: '#333399',
        textAlign: 'center',
        "& h1": {
            paddingTop: '100px',
            fontSize: '30px',

            '@media (max-width:1300px)' : {
                fontSize: '25px',
            },
            
            '@media (max-width:700px)' : {
                fontSize: '20px',
                },
        },
        "& p": {
            fontSize: '20px',
            width:'700px',
            color: '#807C87',
            margin: 'auto',

        '@media (max-width:1300px)' : {
                fontSize: '1.1rem',
            },
        '@media (max-width:700px)' : {
            fontSize: '1rem',
            width: '500px',
            },
        },
    },
    // "@media screen and (max-width: 1300px)": {
    //     mission: {
    //         color: 'red',
    //         fontSize: '15px',
    //       },
    //     },

};
export default missionStyleSheet;