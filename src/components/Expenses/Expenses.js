import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(props){
    return (
        <Card className = 'expenses'>
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