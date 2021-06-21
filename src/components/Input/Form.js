import React, {useState} from "react";
import './Form.css';

// Function is passed down to via "props" from "NewExpense"
// We use the function that is passed down to pass information up to the parent!

function Form(props) {
	// Declaring states to monitor:
	const [enteredTitle, setTitle] = useState('');
	const [enteredAmount, setAmount] = useState('');
	const [enteredDate, setDate] = useState('');
	const [showForm, setShowForm] = useState(false);

	// Declaring all the above in one: But you have to change all 3 values when you do this.
	// useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// })

	// changing a state that depends on another state
	// setUserInput((prevState) => {
	// 	return {...prevState, title: event.target.value}
	// });


	// function that handles events (this could be key presses)
	function titleHandler(event){
		setTitle(event.target.value);
	}

	function amountHandler(event){
		setAmount(event.target.value);
	}

	function dateHandler(event){
		setDate(event.target.value);
	}

	function submission(event) {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};


		props.onSaveExpenseData(expenseData);

		// clears the form once button is pressed!
		setTitle("");
		setAmount("");
		setDate("");
	};

	function hideForm()
	{
		setShowForm(false);
	}

	function OnClickShowForm()
	{
		setShowForm(true);
	}

	if (showForm) {
		return (
			<form onSubmit={submission}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleHandler}/> 
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" value={enteredAmount} onChange={amountHandler}/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateHandler}/>
				</div>
			</div>
			<div className="new-expense_-actions">
				<button type="button" onClick={hideForm}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
		)
	}

	// Putting "onChange" on input means on every button press do {function}
	// value is what is in it. Currently, with value={enteredAmount}, this allows two way binding as the above e.g., setTitle("") clears the form! =D
	return (
		<div>
		<button onClick={OnClickShowForm}>Add Expense</button>
		</div>
	);
};

export default Form;