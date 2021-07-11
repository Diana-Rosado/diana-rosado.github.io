import zIndex from "@material-ui/core/styles/zIndex";

const DashboardStyles = {


    header: {
        width: '100vw',
        height: '10vh',
        float: 'right',
        borderBottom: '1px solid #E5E5E5 ',
        display: 'flex',
    },

    user: {
        display: 'flex',
        flex: '0.5',

    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        flex: '5',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: '100px',

    },


    searchField: {
        width: '30%',
        boxShadow: '0px 5px 16px 0px rgba(0,0,0,0.23)',
        padding: ' 10px 35px 10px 15px',
        border: 'none',
        borderRadius: '10px',
        outline: 'none',
        height: '30px',
        fontSize: '12px',

    },
    searchButton: {
        background: 'transparent',
        marginLeft: '-40px',
    },
    logo: {
        gridArea: "logo",
        height: "15vh",

    },
    logoBtn: {
        width: '40px',
        marginTop: '25px',
    },

    nav: {
        height: "40vh",
        display: "flex",
        flexDirection: 'column',
        marginTop: '100px',
    },
    navBtn: {
        marginBottom: '30px',
    },
    toolTip: {
        width: '50px',
    },

    sidebar: {
        backgroundColor: "black",
        height: "100vh",
        boxShadow: "14px 0px 27px -14px rgba(131,131,131,0.63)",
        textAlign: "center",
        position: "fixed",
        width: "6vw",

        // minWidth: "110px !important",
    },
};

export default DashboardStyles;
