import React, { useState, useContext } from 'react';
import { makeStyles } from "@material-ui/core";
import { CollegeContext } from './CollegeContext.jsx';
import College from './College.js';
import financialStyles from './financialStyles.js';

const useStyles = makeStyles(financialStyles);

const AddCollege = () => {

    const classes = useStyles();

    const [name, setName] = useState('');
    const [colleges, setColleges] = useContext(CollegeContext);

    const updateName = (e) => {
        setName(e.target.value);
    };

    const addCollege = e => {
        e.preventDefault();
        setColleges(prevColleges => [...prevColleges, { name: name }])

    };
    return (
        <div>
            <form onSubmit={addCollege}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateName}
                    required />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddCollege;
