const surveyStyles = {
    text: {
        fontSize: '0.9em',
        fontWeight: '600',
        color: '#4d4d4d',
    },
    answer: {
        display: 'inline-block',
        padding: '0.3em 1.2em',
        margin: '0 0.1em 0.1em 0',
        border: '0.16em solid rgba(255,255,255,0)',
        boxSizing: 'border-box',
        textDecoration: 'none',
        fontWeight: '300',
        color: 'gray',
        textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
        textAlign: 'center',
        transition: 'all 0.2s',
        borderRadius: '0.12em',


        "&:hover": {
            borderColor: 'rgba(255,255,255,1)',
        },

        "@media all and (max-width:30em)": {
            display: 'block',
            margin: '0.4em auto',
        },

    },

    option: {

    }
}

export default surveyStyles;