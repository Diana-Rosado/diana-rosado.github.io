
const DashboardStyles = {

    header: {
        gridColumnStart: '3',
        gridColumnEnd: 'end',
        gridRowStart: '1',
        gridRowEnd: '2',

    },

    user: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    userImg: {
        height: '50px',
        // marginTop: '10px',
        marginRight: '20px',
    },
    username: {
        fontSize: '16px',
        // position: 'relative',
        // top: '-10px',
    },

    logo: {
        gridArea: 'logo',
        height: '10vh',
    },
    logoBtn: {
        fontWeight: 'bold',
        position: "relative",
        top: '2.5vh',
        fontSize: '16px',
        textTransform: 'capitalize',
    },

    nav: {
        gridArea: 'sidebar',
        height: '80vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexFlow: 'column wrap',
    },

    navBtn: {
        fontFamily: 'sans-Serif',
        color: '#AAA5A9',
        padding: '20px',
        textTransform: 'capitalize',
        fontSize: '15px',
        width: '20vw',

        "&:hover": {
            fontWeight: 'bold',
            color: 'black',
        },
    },
    logOut: {
        gridArea: 'footer',
    },


    home: {
        display: 'grid',
        gridTemplateColumns: '20vw 65vw 15vw',
        gridTemplateRows: '10vh 80vh 10vh',
        gridTemplateAreas: `
        "logo header user"
        "sidebar banner ."
        "footer resources . "
      `
    },

    sidebar: {
        backgroundColor: '#F7F7F7',
        height: '100vh',
        boxShadow: '14px 0px 27px -14px rgba(131,131,131,0.63)',
        textAlign: 'center',
        position: 'fixed',
        width: '20vw',
    },


};

export default DashboardStyles;