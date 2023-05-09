import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";
import useInput from '../../Hooks/useInput';

const NewExpense = (props) => {
  const [menuState, setMenuState] = useState(false);
  const [
    enteredDate,
    dateIsValid,
    inputDateValidation,
    dateInputClasses,
    dateHandler,
    dateValidationHandler,
    dateResetHandler,
  ] = useInput((input) => {
    return input.trim().length === 0;
  });
  const [
    enteredTitle,
    titleIsValid,
    inputTitleValidation,
    titleInputClasses,
    titleHandler,
    titleValidationHandler,
    titleResetHandler,
  ] = useInput((input) => {
    return input.trim().length === 0;
  });
  
  const [
    enteredValue,
    valueIsValid,
    inputValueValidation,
    valueInputClasses,
    valueHandler,
    valueValidationHandler,
    valueResetHandler,
  ] = useInput((input) => {
    return input.trim().length === 0;
  });
  const basicFormProps = {
    enteredTitle,
    titleIsValid,
    inputTitleValidation,
    titleInputClasses,
    titleHandler,
    titleValidationHandler,
    titleResetHandler,
    enteredValue,
    valueIsValid,
    inputValueValidation,
    valueInputClasses,
    valueHandler,
    valueValidationHandler,
    valueResetHandler,
    enteredDate,
    dateIsValid,
    inputDateValidation,
    dateInputClasses,
    dateHandler,
    dateValidationHandler,
    dateResetHandler,
  };
  let formValidation = false;
  if (titleIsValid && dateIsValid && valueIsValid) {
    formValidation = true;
  }


  const menuHandler = () => {
    if (menuState === false) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
    
  };

  let menu = <button onClick={menuHandler}>Add New Expense</button>;

  if (menuState === true) {
    menu = <NewExpenseForm 
    FormValidation={formValidation}
    {...basicFormProps}
    OnSubmitHandler={props.onSubmitHandler}
    onMenuHandler={menuHandler}/>;
  }

  return <div className="new-expense">{menu}</div>;
};

export default NewExpense;
