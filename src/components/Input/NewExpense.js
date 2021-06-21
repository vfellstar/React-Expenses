import React from "react";
import './NewExpense.css'
import Form from "./Form";

function NewExpense(props) {

	function saveExpenseDataHandler(enteredExpenseData) {

		const expenseData = {
			id: Math.random().toString(),
			...enteredExpenseData,
		};

		props.onAddExpense(expenseData); // forward data to "App".
		
	}


	// "onSaveExpenseData" is to pass information from child to parent (from Form to NewExpense) - cant be named anything! We pass the function
	// function is now usable by child even though its in the parent! This is how we pass data upwards!
	return(
		<div className="new-expense">

			<Form onSaveExpenseData={saveExpenseDataHandler}/>
		</div>
	);

};


export default NewExpense;