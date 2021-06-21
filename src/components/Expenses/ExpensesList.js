import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {

	let message = <p className="message">No expenses to show!</p>;

	if (props.expenses.length === 0 ) {
		return <h2 className="expenses-list__fallback">{message}</h2>
	}

	return (

		<ul className="expenses-list">
			{
				props.expenses.map(
					expense => 
					<ExpenseItem 
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				)
			}

		</ul>
	)
}

export default ExpensesList;