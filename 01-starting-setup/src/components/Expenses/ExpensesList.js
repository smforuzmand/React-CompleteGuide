import React from "react"
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {



    if (props.items.length === 0) {
        return
        <h2 className="expenses-list__fallback">thr expenses not found</h2>

    }

    /* if (props.items.length > 0) {
        chekExpenses = props.items.map((expense) =>
        (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}

            />))

    }   now we are goning to move it inside the return */

    return
    <div>
        <ul className="expenses-list">
            {props.items.map((expense) =>
            (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}

                />))}


        </ul>

    </div>

};



export default ExpensesList


