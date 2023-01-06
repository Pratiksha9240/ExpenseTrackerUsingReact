import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.expenseDate.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No Expense Found.</p>

  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((ele) => (
      <React.Fragment key={ele.id}>
        <ExpenseItem
          title={ele.expenseTitle}
          amount={ele.expenseAmount}
          location={ele.expenseLocation}
          date={ele.expenseDate}
        ></ExpenseItem>
      </React.Fragment>
    ))
  }

  if(filteredExpenses.length === 1){
    expenseContent = filteredExpenses.map((ele) => (
      <React.Fragment key={ele.id}>
        <ExpenseItem
          title={ele.expenseTitle}
          amount={ele.expenseAmount}
          location={ele.expenseLocation}
          date={ele.expenseDate}
        ></ExpenseItem>
        <p>Only one Expense Found.Please add more.</p>
      </React.Fragment>
      
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      {expenseContent}
    </Card>
  );
};

export default Expenses;
