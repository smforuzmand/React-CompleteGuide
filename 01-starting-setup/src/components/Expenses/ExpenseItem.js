import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)


    // let title = props.title;
    const eventHandler = () => {
        setTitle("updated!!!!!")
    }
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={eventHandler}>click me</button>
            </Card>
        </li>
    );
}

export default ExpenseItem;