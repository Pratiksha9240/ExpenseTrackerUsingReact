import './ExpenseForm.css';

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }


    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="Title">Title</label>
                    <input type="text" name="Title" id="Title" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="Amount">Amount</label>
                    <input type="number" name="Amount" id="Amount" />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="Date">Date</label>
                    <input type="date" name="Date" id="Date" />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;