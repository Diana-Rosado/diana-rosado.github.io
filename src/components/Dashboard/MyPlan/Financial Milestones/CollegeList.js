import React, { useContext } from 'react';
import { CollegeContext } from './CollegeContext.jsx';
import College from './College.js';
const CollegeList = () => {
    const [colleges, setColleges] = useContext(CollegeContext);
    return (
        <div>
            {colleges.map(college => (
                <College name={college.name} key={college.id} />
            ))}
        </div>
    )
}

export default CollegeList;
