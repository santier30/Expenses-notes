import "./ExpensesList.css"
import React from "react";
import ExpenseItem from "./ExpenseItems";


const ExpensesList = (props)=>{
    

  if(props.item.length === 0){
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>}

    return(<ul className="expenses-list">
        {props.item.map((exp) => {
        return (
          <ExpenseItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
          />
        )})}
    </ul>)
    
}
  



export default ExpensesList;