// Can only have one root element!

// add CSS! just import the file lol then className="" instead of class=""
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// allows us to alter state!
import React, {useState} from 'react'; 

// parameters is always one thing even if it takes in 100s of variables - you can name it what you want though lol
function ExpenseItem(props) {

  // Updating states! - react hook called inside react functions only! - returns array, the variable and a way to set the variable!
  const [title, setTitle] = useState(props.title); 

  function setTitleDude()
  {
    setTitle("Updated!")
  }

  // Dynamic place holders are done by putting stuff inside "{}"
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
      <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={setTitleDude}>Update Title</button>
    </Card>
  );
}

// Export it so you can use it like a HTML tag!
export default ExpenseItem;
