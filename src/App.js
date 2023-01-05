import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const App = () => {
  const expenses = [
    {
      id: 1,
      expenseTitle: "Car Insurance",
      expenseAmount: 10000,
      expenseLocation: "Pune",
      expenseDate: new Date(2022, 11, 30),
    },
    {
      id: 2,
      expenseTitle: "Movie",
      expenseAmount: 250,
      expenseLocation: "Kharadi",
      expenseDate: new Date(2022, 10, 12),
    },
    {
      id: 3,
      expenseTitle: "School fees",
      expenseAmount: 50000,
      expenseLocation: "Mumbai",
      expenseDate: new Date(2021, 11, 30),
    },
    {
      id: 4,
      expenseTitle: "Food",
      expenseAmount: 5000,
      expenseLocation: "Pune",
      expenseDate: new Date(2022, 5, 9),
    },
  ];

  return (
    <>
      <NewExpense/>
      <Expenses items = {expenses}></Expenses>
    </>
  );
}

export default App;
