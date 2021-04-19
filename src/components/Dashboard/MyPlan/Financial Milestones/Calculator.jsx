import React, { useState, useContext } from 'react'
import { CollegeContext } from './CollegeContext.jsx'
import College from './College.js';
import financialStyles from './financialStyles.js';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(financialStyles);

const Calculator = () => {
    const [colleges, setColleges] = useContext(CollegeContext);
    const [count, setCount] = useState(0);
    const classes = useStyles();

    //#region 
    const [values, set_values] = useState({
        tuition: '',
        dorm: '',
        awards: '',
        savings: '',
        work_study: '',
        expenses: ''

    })

    const value_handler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        const newValues = {
            ...values,
            [name]: value
        }
        set_values(newValues)

        // Calling the method to sum the value
        calc_total(newValues)
    }

    const [total, setTotal] = useState('');

    const calc_total = (newValues) => {
        const { tuition, dorm, savings, awards, work_study, expenses } = newValues;
        const newTotal = parseInt(tuition) + parseInt(dorm) - parseInt(savings) - parseInt(awards) - parseInt(work_study) + parseInt(expenses)
        setTotal(newTotal)

    }
    //#endregion
    const list = colleges.map(college => (
        <College name={college.name} key={college.id} />
    ))

    // const ChangeName = () => {
    //     setCount(prev => (prev + 1) % list.length);
    // };

    return (
        <div>
            {/* <button onClick={ChangeName}>Click me</button> */}
            {/* <p>{list[count]}</p> */}
            <form className={classes.values}>
                <section className={classes.blocks}>
                    <div className={classes.block1}>
                        <label>Tuition (One Full Year)</label>
                        <td>$<input type='number' onChange={value_handler} name='tuition' placeholder={'Enter Amount'} /></td>
                    </div>

                    <div className={classes.block2}>
                        <label>Room & Board</label>
                        <td>$<input type='number' onChange={value_handler} name='dorm' placeholder={'Enter Amount'} /></td>

                    </div>
                    <div className={classes.block3}>
                        <label>Total Grants & Scholarships</label>
                        <td>$<input type='number' onChange={value_handler} name='awards' placeholder={'Enter Amount'} /></td>
                    </div>
                    <div className={classes.block4}>
                        <label>Total Savings</label>
                        <td>$<input type='number' onChange={value_handler} name='work_study' placeholder={'Enter Amount'} /></td>
                    </div>
                    <div className={classes.block5}>
                        <label>Work Study</label>
                        <td>$<input type='number' onChange={value_handler} name='savings' placeholder={'Enter Amount'} /></td>
                    </div>
                    <div className={classes.block6}>
                        <label>Other Annual Expenses</label>
                        <td>$<input type='number' onChange={value_handler} name='expenses' placeholder={'Enter Amount'} /></td>
                    </div>
                </section>
            </form>
            <div className={classes.estimation}>
                <strong style={{ fontSize: '20px' }}>Estimated cost per year:</strong>
                <div className={classes.total}><td> ${total}</td></div>
            </div>
            {/* {count > 0 && <button onClick={() => setCount(count - 1)}>prev</button>}
            {count < list.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>} */}
            <div>

            </div>
        </div>
    )
}

export default Calculator;
