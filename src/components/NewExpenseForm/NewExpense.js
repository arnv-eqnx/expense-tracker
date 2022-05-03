import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props)
{
    function submissionHandler(enteredExpenseData)
    {
        const data = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddition(data);
        setFlag(false);
    };

    const [flag, setFlag] = useState(false);

    const addingHandler = () =>{
        setFlag(true);
    };

    const stopAddingHandler = () =>{
        setFlag(false)
    };


    return (
        <div className = "new-expense">
            {/* <p className="new-expense-heading">Log a new expense</p> */}
            {!flag && <div className='adding-handler-button'><button onClick={addingHandler} >Log a new expense</button></div>}
            {flag && <ExpenseForm onSubmission = {submissionHandler} onCancel = {stopAddingHandler}/>}
        </div>
    );
}

export default NewExpense;