import ExpenseController from "./components/Expenses/ExpenseController";
import NewExpense from "./components/Input/NewExpense";
import React, {useState} from "react";
// once you import this item you can use it like a HTML tag! =D


//Notes:
    // passing from parent to child: use props to pass down variables
    // passing from child to parent: use props to pass down functions
    
    	const EXAMPLE_EXPENSES = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        }
      ];
    
function App() {

  const [expenses, setExpenses] = useState(EXAMPLE_EXPENSES);

      function addExpenseHandler(expense) {
        
        setExpenses(prevExpenses => {
          return [expense, ...prevExpenses]
        });
      }

    // pass json attributes to the function! just be sure to remember what you called each one e.g., "title", "amount" etc here.
    return ( 
        <div>
            <h2> Let's get started! Bro!</h2>  
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseController expenses={expenses}/>
        </div>
    );
}

// exports this function for other files!
export default App;
