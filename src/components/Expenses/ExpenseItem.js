import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  
  const deleteExpenseHandler = () => {
    const d = document.getElementById(`${props.date}`);
    const c = d.remove();
    console.log(d);
  }

  return (
    <div id={props.date}>
    <Card className = 'expense-item'>
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location}></ExpenseDetails>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
    </Card>
    </div>
  );
}

export default ExpenseItem;
