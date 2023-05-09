import { useReducer } from "react";



const useInput = (cond) => {
  const inputReducer = (state, action) => {
    if (action.type === "INPUT") {
      return {
        enteredInput: action.value,
        InputIsValid: state.InputIsValid,
        InputIsTouched: true,
      };
    }
    if (action.type === "VALIDATE") {
      return {
        enteredInput: state.enteredInput,
        InputIsValid: !action.cond(state.enteredInput),
        InputIsTouched: true,
      };
    }
    if (action.type === "RESET") {
      return {
        enteredInput: "",
        InputIsValid: false,
        InputIsTouched: false,
      };
    }
    return state;
  };
  
  const [inputState, dispatch] = useReducer(inputReducer, {
    enteredInput: "",
    InputIsValid: false,
    InputIsTouched: false,
  });

  const InputHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    dispatch({ type: "VALIDATE", cond });
  };

  const InputValidationHandler = () => {
    dispatch({ type: "VALIDATE", cond });
  };

  const InputResetHandler = () => {
    dispatch({ type: "RESET" });
  };

  const inputValidation = !inputState.InputIsValid && inputState.InputIsTouched;
  const InputClasses = inputValidation ? true : false;
  return [
    inputState.enteredInput,
    inputState.InputIsValid,
    inputValidation,
    InputClasses,
    InputHandler,
    InputValidationHandler,
    InputResetHandler,
  ];
};
export default useInput;
