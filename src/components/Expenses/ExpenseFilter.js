import './ExpenseFilter.css'

function ExpenseFilter(props)
{
    const dropdownChangeHandler = event =>{
        props.onYearChangeHandler(event.target.value);
    }

    return(
        <div className="expenses-filter-container">
            <div className='expenses-filter-control'>
                <label>Filter by year</label>
                <select value={props.defaultSelect} onChange={dropdownChangeHandler}>
                    <option value='All'>All</option>  
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;