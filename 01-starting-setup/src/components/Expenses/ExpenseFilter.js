import React, { useState } from 'react';
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {

    const dropDownEventHandler = (event) => {
        // console.log(event.target.value);
        // the below function has responsibility to send data to Expenses
        props.onFileterChange(event.target.value)


    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.firstYear} onChange={dropDownEventHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;