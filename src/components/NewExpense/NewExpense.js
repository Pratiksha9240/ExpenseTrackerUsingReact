import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseObj) => {
        const expenseObj = {
            ...enteredExpenseObj
        }
        // console.log(expenseObj);
        props.onAddExpense(expenseObj);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;