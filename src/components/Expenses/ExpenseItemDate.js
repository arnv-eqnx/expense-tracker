import './ExpenseItemDate.css';

function ExpenseItemDate(props)
{
    const day = props.date.toLocaleString('en-US', {day : '2-digit'});
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const year = props.date.getFullYear();

    return(
        <div className= "expense-item-date"> 
            <div className= "expense-item-date__day">{day}</div>
            <div className= "expense-item-date__month">{month}</div>
            <div className= "expense-item-date__year">{year}</div>
        </div>
    );
}

export default ExpenseItemDate;
