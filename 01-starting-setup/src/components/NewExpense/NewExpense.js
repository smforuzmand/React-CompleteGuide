import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'


const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            // generating new expense including random id
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // console.log(expenseData)
        // we add data which recieved from expenseData to onAddExpense
        props.onAddExpense(expenseData);
    };




    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />

        </div>
    )
}


export default NewExpense;