import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseObj) => {
        const expenseObj = {
            ...enteredExpenseObj
        }
        // console.log(expenseObj);
        props.onAddExpense(expenseObj);
        setFlag(false);
    }

    let flag = false;

    const [f,setFlag] = useState(flag);

    const showForm = () => {
        setFlag(true);
    }

    const hideForm = () => {
        setFlag(false);
    }

    let expenseForm = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {hideForm}/>

    return (
        <div className='new-expense'>
            {f === false && <button onClick={showForm}>Add New Expense</button>}
            {f === true && expenseForm}
        </div>
    );
}

export default NewExpense;