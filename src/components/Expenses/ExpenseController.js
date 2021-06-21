import ExpenseFilter from "../Graph/ExpenseFilter";
import './ExpenseController.css'
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function ExpenseController(props) {
	
	const [yearSelected, changeYearSelected] = useState("2020");

	function onSelectYear(year) {

		changeYearSelected(year);
		
		}

	// dont need to mess around with state if we want to filter through data! Just do this!
	const filteredExpenses = props.expenses.filter(
		expense => {
			return expense.date.getFullYear().toString() === yearSelected;
		}
	)
	


		// map() takes in a function to do to each piece of item! :D
		// everything has to have a "key" which can be any primitive value! otherwise there will be bugs lol


	
		return (

		<div>
			<li>
				<Card className="expenses">
				<ExpenseFilter 
				className="expenses"
				selectedYear={yearSelected}
				onYearSelect={onSelectYear}
				/>
				<ExpensesChart expenses={filteredExpenses}/>
				<ExpensesList expenses={filteredExpenses}/>

			</Card>
			</li>

		</div>

		)
	


}

export default ExpenseController;