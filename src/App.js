import { useState } from 'react';
import AllExpenses from './components/Expenses/AllExpenses'
import Heading from './components/Heading/Heading';
import NewExpense from './components/NewExpenseForm/NewExpense';
import FooterComp from './components/Footer/FooterComp';

const dummy_expenses = [
  {
    id : "e1",
    title: "Bluetooth Speaker",
    amount: 2500,
    date: new Date(2022, 0, 14),
  },

  {
    id : "e2",
    title: "Samsung SSD",
    amount: 7500,
    date: new Date(2022, 3, 22),
  },

  {
    id : "e3",
    title: "Clothes",
    amount: 1300,
    date: new Date(2021, 2, 19),
  },

  {
    id : "e4",
    title: "Sneakers",
    amount: 8500,
    date: new Date(2020, 1, 2),
  }
];


function App(){
  
  const [expenses, setExpenses] = useState(dummy_expenses);
  
  const expenseAdditionHandler = (addedExpense) => {
    setExpenses(prevExpenses => {
      return [addedExpense, ...prevExpenses];
    });
  };

  // const filteredArrayDisplay = year =>{
  //   var filterYear = year;
  //   console.log('App.js me swagat hai');
  //   console.log(filterYear);
  // }

  return (
    <div>
        <Heading /> 
        <NewExpense onAddition = {expenseAdditionHandler} />
        <AllExpenses item={expenses} />
        <FooterComp />
    </div>
  );
}

export default App;
