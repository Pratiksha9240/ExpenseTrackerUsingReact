import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {

  // const expenseDate = new Date(2022, 11, 30);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmout = 10000;
  // const expenseLocation = 'Pune';

  return (
    <div className = 'expense-item'>
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location}></ExpenseDetails>
    </div>
  );
}

export default ExpenseItem;
