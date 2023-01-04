import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';

const ExpenseItem = (props) => {

  const [amount,setAmount] = useState(props.amount);

  
  const updateExpenseHandler = () => {
    setAmount(100);
    console.log(amount);
  }
  
  const deleteExpenseHandler = () => {
    const d = document.getElementById(`${props.date}`);
    const c = d.remove();
    console.log(d);
  }

  return (
    <div id={props.date}>
    <Card className = 'expense-item'>
      <ExpenseDate date = {props.date}></ExpenseDate>
      <ExpenseDetails title = {props.title} amount = {amount} location = {props.location}></ExpenseDetails>
      <button onClick={deleteExpenseHandler}>Delete Expense</button>
      <button onClick={updateExpenseHandler}>Update Expense</button>
    </Card>
    </div>
  );
}

export default ExpenseItem;
