import zIndex from "@material-ui/core/styles/zIndex";

const DashboardStyles = {
    container: {
        display: 'flex',

    },

    header: {
        width: '100vw',
        zIndex: '3',
        backgroundColor: 'yellow',
        height: '18vh',
        textAlign: 'end'
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
        zIndex: '1',
        height: "100vh",
        boxShadow: "14px 0px 27px -14px rgba(131,131,131,0.63)",
        textAlign: "center",
        position: "fixed",
        width: "6vw",
        // minWidth: "110px !important",
    },
};

export default DashboardStyles;
