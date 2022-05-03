import { useState } from 'react';
import ExpenseItem  from './ExpenseItem';
import './AllExpenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseGraph from './ExpenseGraph';

function AllExpenses(props)
{ 
    const [filterYear, setFilterYear] = useState('All');

    const filterChangeHandler = selectedYear =>{
      setFilterYear(selectedYear);
      // props.onFilter(selectedYear);
    }

    let filteredExpenses = props.item.filter(expense => {
      return expense.date.getFullYear().toString() === filterYear;
    })

    let displayFilteredExpenses = <div className='no-expenses-message'><p>No expenses found.</p></div>;

    if(filteredExpenses.length > 0)
      displayFilteredExpenses = filteredExpenses.map(expense => <ExpenseItem key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>)
    
    else if(filteredExpenses.length === 0 && filterYear ==='All')
      {displayFilteredExpenses = props.item.map(expense => <ExpenseItem key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>)

        filteredExpenses= props.item.map(expense => expense);
      }

    return(
    <div className="all-expenses">

        <p className="heading">All Expenses</p>

        <ExpenseFilter defaultSelect={filterYear} onYearChangeHandler = {filterChangeHandler}/>
        <ExpenseGraph expenses = {filteredExpenses} />

        {displayFilteredExpenses}

    </div>
    );
}

export default AllExpenses;