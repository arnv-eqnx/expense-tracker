import './ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';
import {useState} from 'react'; 

function ExpenseItem(props)
{
    return (
        <div className= "expense-item">
            <ExpenseItemDate date = {props.date}></ExpenseItemDate>
            <div className = "expense-item__description">
                <h2>{props.title}</h2>
                <div className = "expense-item__price">
                    <h2>Rs. {props.amount}</h2>
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;

