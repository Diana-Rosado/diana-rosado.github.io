import React, { useState, createContext } from 'react'

/**
* @author
* @function CollegeContext
**/

export const CollegeContext = createContext();


export const CollegeProvider = props => {
    const [colleges, setColleges] = useState([]);
    return (
        <CollegeContext.Provider value={[colleges, setColleges]}>
            {props.children}
        </CollegeContext.Provider>
    );

}
