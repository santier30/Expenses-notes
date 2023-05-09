import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState,useEffect} from "react";
import useFetch from "./Hooks/use-fetch";


function App() {

  const [expense,setExpense]=useState([]); 



  const transformexpense = (expenseObj) => {
    const loadedexpenses = [];

    for (const expenseKey in expenseObj) {
      loadedexpenses.push({ 
        id: expenseKey, 
        amount: expenseObj[expenseKey].amount,
          title:expenseObj[expenseKey].title,
          date:new Date(expenseObj[expenseKey].date),
         });
    }
    console.log(loadedexpenses)
    setExpense(loadedexpenses);
  };
  const {isLoading ,error ,sendRequest:fetchexpense} = useFetch(
    
    );
    useEffect(() => {
      fetchexpense({
        url: "https://expenses-list-7a099-default-rtdb.firebaseio.com/Expenses.json",
      },
      transformexpense);
    }, [fetchexpense ]);

const submitHandler = () =>{
  fetchexpense({
    url: "https://expenses-list-7a099-default-rtdb.firebaseio.com/Expenses.json",
  },
  transformexpense);
}



  return (
    <div>
      <NewExpense onSubmitHandler={submitHandler}/>
      <Expenses expenses={expense}  />
    </div>
  );
}

export default App;
