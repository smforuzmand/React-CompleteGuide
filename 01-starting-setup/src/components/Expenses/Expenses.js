import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

    const [pickedYear, setPickedYear] = useState('2020');
    // we need to pass a function to the component to call it whenever new value is chosen in the fuunction 
    const filteredChangeHandler = selectedYear => {
        console.log(selectedYear);


        setPickedYear(selectedYear);

        //  -> setPicketYear -> selectYear ->
        // filterChangeHandler ->onFilteredChange
        // {ExpenseFilter} ->props.onFilteredChange

    }


    return (
        <div>
            <Card className="expenses">
                {/* the below event is ourself for accepting the above function */}
                <ExpenseFilter firstYear={pickedYear} onFileterChange={filteredChangeHandler} />

                {props.items.map((expense) => (<ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}



                />))}
                {/* 
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                /> */}
            </Card>
        </div>
    );
}

export default Expenses;