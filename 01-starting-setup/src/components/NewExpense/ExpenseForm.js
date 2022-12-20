
import './ExpenseForm.css';
import React, { useState } from "react";



const ExpenseForm = () => {

    const [enteredtitle, setEnteredTitle] = useState('')

    const [enterdeAmount, setEnteredAmount] = useState('')

    const [enteredDate, setEnteredDate] = useState('')

    /*     const [userInput, setUserInput] = useState({
            enteredtitle: '',
            enterdeAmount: '',
            enteredDate: ''
        })
     */



    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);


    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    }


    const titleEventHandler = (event) => {

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredtitle: event.target.value }
        // });

        setEnteredTitle(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        // the first step is to prevent the default behavior 
        // the next step is to provide the information with of the expense data
        const expenseData = {
            title: enteredtitle,
            amount: enterdeAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');


    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredtitle} onChange={titleEventHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enterdeAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>

            </div>
        </form>
    )
};

export default ExpenseForm;
