import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredYear,setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    return (
        <Card className = 'expenses'>
          <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
        {props.items.map((ele) => (
            <>
              <ExpenseItem
                key={ele.id}
                title={ele.expenseTitle}
                amount={ele.expenseAmount}
                location={ele.expenseLocation}
                date = {ele.expenseDate}
              ></ExpenseItem>
            </>
          ))}
          </Card>
    )
}

export default Expenses;