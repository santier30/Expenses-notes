import React from "react";
import "./NewExpenseForm.css";
import useFetch from '../../Hooks/use-fetch';

const NewExpenseForm = (props) => {
  const {sendRequest:fetchTasks} = useFetch();
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    props.titleValidationHandler();
    props.valueValidationHandler();
    props.dateValidationHandler();
    
    if (props.FormValidation){
      fetchTasks({
        url:'https://expenses-list-7a099-default-rtdb.firebaseio.com/Expenses.json',
        method: 'POST',
        body: JSON.stringify({ 
          amount: parseInt(props.enteredValue,10),
          title: props.enteredTitle,
          date: new Date(props.enteredDate),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }, (data) => {
        console.log(data);
        menuHandler();
        props.OnSubmitHandler();
      });
    };
  };
  
  const menuHandler = () => {
    props.onMenuHandler()
    props.titleResetHandler();
    props.valueResetHandler();
    props.dateResetHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
          className={`${props.titleInputClasses ? "invalid" : ""}`}
          type="text"
          id="title"
          value={props.enteredTitle}
          onChange={props.titleHandler}
          onBlur={props.titleValidationHandler}
        />
            {props.inputTitleValidation && (
            <p className={"errorText"}>(Title must not be empty)</p>
          )}
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
          className={`${props.valueInputClasses ? "invalid" : ""}`}
          type="number"
          id="value"
          value={props.enteredValue}
          onChange={props.valueHandler}
          onBlur={props.valueValidationHandler}
          min="0.01"
          step="0.01"
        />
            {props.inputValueValidation && (
            <p className={"errorText"}>(Value must not be empty)</p>
          )}
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
          className={`${props.dateInputClasses ? "invalid" : ""}`}
          type="date"
          id="date"
          value={props.enteredDate}
          onChange={props.dateHandler}
          onBlur={props.dateValidationHandler}
          min="2019-01-01"
          max="2024-12-31"
        />
         {props.inputDateValidation && (
            <p className={"errorText"}>(Date must not be empty)</p>
          )}
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button"onClick={menuHandler}>Cancel</button>
        <button type="submit"  >Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
