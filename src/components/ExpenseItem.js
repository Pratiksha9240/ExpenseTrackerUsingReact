import './ExpenseItem.css'

function ExpenseItem() {

  const expenseDate = new Date(2022, 11, 30);
  const expenseTitle = 'Car Insurance';
  const expenseAmout = 10000;
  const expenseLocation = 'Pune';


  return (
    <div className = 'expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className = 'expense-item__description'>
        <h2>{expenseTitle}</h2>
        <h2>{expenseLocation}</h2>
        <div className = 'expense-item__price'>Rs.{expenseAmout}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
