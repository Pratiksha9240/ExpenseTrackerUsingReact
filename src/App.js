import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      id : 1,
      expenseTitle: "Car Insurance",
      expenseAmount: 10000,
      expenseLocation: "Pune",
      expenseDate: new Date(2022, 11, 30),
    },
    {
      id : 2,
      expenseTitle: "Movie",
      expenseAmount: 250,
      expenseLocation: "Kharadi",
      expenseDate: new Date(2022, 10, 12),
    },
    {
      id : 3,
      expenseTitle: "School fees",
      expenseAmount: 50000,
      expenseLocation: "Mumbai",
      expenseDate: new Date(2021, 11, 30),
    },
    {
      id : 4,
      expenseTitle: "Food",
      expenseAmount: 5000,
      expenseLocation: "Pune",
      expenseDate: new Date(2022, 5, 9),
    },
  ];

  return (
    <>
      <h1>Let's Get Started</h1>
        {
          expenses.map((ele) => (
            <ExpenseItem
            key = {ele.id}
          title={ele.expenseTitle}
          amount={ele.expenseAmount}
          location={ele.expenseLocation}
          date={ele.expenseDate}
        ></ExpenseItem>
          ))
        }
    </>
  );
}

export default App;
