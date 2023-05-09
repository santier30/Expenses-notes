import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState(new Date().getFullYear().toString());


  const yearSelection = (year) => {
    setYearSelected(year);
  };

  const filteredExpenses = props.expenses.filter((obj) => {
    return obj.date.getFullYear().toString() === yearSelected;
  });
  

  return (
    <Card className="expenses">
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesFilter onYearSelection={yearSelection} />
      <ExpensesList item={filteredExpenses}/>
     
    </Card>
  );
};
export default Expenses;
