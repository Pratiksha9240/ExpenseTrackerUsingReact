import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredId, setEnteredId] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  }

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseObj = {
        id : enteredId,
        expenseTitle : enteredTitle,
        expenseAmount : enteredAmount,
        expenseLocation : enteredLocation,
        expenseDate : new Date(enteredDate)
    }

    // console.log(expenseObj);
    props.onSaveExpenseData(expenseObj);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredLocation('');
    setEnteredId('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
      <div className="new-expense__control">
          <label htmlFor="id">Id</label>
          <input
            type="number"
            name="id"
            id="id"
            value={enteredId}
            onChange={idChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            name="Title"
            id="Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            name="Amount"
            id="Amount"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="loc">Location</label>
          <input
            type="text"
            name="loc"
            id="loc"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            name="Date"
            id="Date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
