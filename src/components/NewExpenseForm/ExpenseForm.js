import {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props)
{   
    // const [userInput, setUserInput] = useState({ 
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // })

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // }); 
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // });
    } 

    const formSubmitHandler = event => {
        event.preventDefault();

        const userInput = {
            title : enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSubmission(userInput);
        
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');

    }

    return(
            <div className = "form-container">
                <form onSubmit={formSubmitHandler}>
                <div className='grid'>
                    <div className = "form-fields">
                        <div className = "form-inputs">
                            <label>Description :</label>
                            <input type = "text" value = {enteredTitle} onChange = {titleChangeHandler} placeholder="Kahan paise udaaye?" />
                        </div>

                        <div className = "form-inputs">
                            <label>Date :</label>
                            <input type = "date" value = {enteredDate} onChange = {dateChangeHandler} />
                        </div>

                        <div className = "form-inputs">
                            <label>Amount :</label>
                            <input type = "number" value = {enteredAmount} onChange = {amountChangeHandler} required placeholder='kitne udaaye?'/>
                        </div>
                    </div>
                    
                    <button type='button' className='form-button' onClick={props.onCancel}>Cancel</button>
                    <button type = "submit" className='form-button' >Add Expense</button>
                </div>
                </form>
            </div>
    );
}

export default ExpenseForm;