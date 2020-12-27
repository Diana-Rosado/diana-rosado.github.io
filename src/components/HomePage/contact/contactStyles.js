const contactStyleSheet = {
    contactus: {
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        width: '30%',
        margin: '0 auto',
        marginBottom: '150px',

        
        "& input, textarea": {
            width: '80%', /* Full width */
            padding: '12px', /* Some padding */ 
            borderRadius: '4px', /* Rounded borders */
            border: '2px #ccc',
            margin: '6px 1px 16px 30px',
            resize: 'none',
            fontFamily: 'Sans-Serif',
            
        
            
        },
        "& input[type=submit]": {
            backgroundColor: '#653CBE',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginLeft: '10%',
            
        },
        "& input[type=submit]:hover": {
            backgroundColor: '#5A39AE',
          },
    },
    title : {
        "& p" :{
            color: '#653CBE',
            fontWeight: "600",
            fontSize: "30px",
            textAlign: 'center',
        },
    },
    top : {
        fontWeight: "500",
        fontSize: '24px',
    },
    bottom : {
        fontSize: '14px',
        fontWeight: '300',
        marginTop: '-20px',
    },
    tab: {
        margin:'0px 0px 30px 30px '
    },
};
export default contactStyleSheet;