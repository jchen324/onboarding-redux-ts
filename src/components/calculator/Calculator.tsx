import { useEffect } from "react";
import {
  Operator,
  StoredExpression,
  setFirst,
  setSecond,
  setOp,
  setMainDisplay,
  setSubDisplay,
  updateHistory,
  selectHistory,
  selectMainDisplay,
  selectFirst,
  selectSecond,
  selectOp,
} from "../../slices/calculatorSlice";
import { OperatorButton } from "./buttons/OperatorButton";
import { Display } from "./Display";
import { HistoryList } from "./history/HistoryList";
import { NumberGrid } from "./NumberGrid";
import { useAppSelector, useAppDispatch } from "../../appStore/hooks";

export const Calculator = () => {
  const mainDisplay = useAppSelector(selectMainDisplay);
  const first = useAppSelector(selectFirst);
  const second = useAppSelector(selectSecond);
  const op = useAppSelector(selectOp);
  const history = useAppSelector(selectHistory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // auto updates main display to display current expression
    if (first || op || second)
      dispatch(setMainDisplay([first, op, second].join(" ")));
  }, [first, op, second, dispatch]);

  function clear() {
    // clears current expression
    dispatch(setFirst(""));
    dispatch(setSecond(""));
    dispatch(setOp(""));
    dispatch(setMainDisplay(""));
  }

  // Enters a digit to the current expression
  function enterDigit(key: string) {
    if ("1234567890".includes(key)) {
      // makes sure the key is a numbber
      if (op === "") {
        // if no op has been typed yet, add digit to first
        dispatch(setFirst(first + key));
      } else {
        // if an op has already been typed, add digit to second
        dispatch(setSecond(second + key));
      }
    }
  }

  // Enters an operator to the current expression
  function enterOperator(key: string) {
    // Makes sure op is empty already and the op is valid
    if ((key === "+" || key === "-" || key === "*" || key === "/") && !op) {
      if (first) {
        // Normal case, when first has already been typed
        dispatch(setOp(key));
      } else if (history[0]) {
        // History case for using previous result, autofilling first
        dispatch(setFirst("" + history[0].result));
        dispatch(setOp(key));
      }
      // Otherwise, do nothing
    }
  }

  // Takes two numbers and a string operator and computes the numerical result
  function compute(f: number, s: number, operator: Operator) {
    let result = 0;
    switch (operator) {
      case "+":
        result = f + s;
        break;
      case "-":
        result = f - s;
        break;
      case "*":
        result = f * s;
        break;
      case "/":
        result = f / s;
        break;
    }
    return result;
  }

  // Attempts to run a calculation
  // Different behavior depending on the current expression.
  // Can be used to repeat history expressions
  function enterEnter() {
    if (first && op && second) {
      // Normal case, computes the current expression with first, second, and op
      let firstNum = parseInt(first); // Parse strings as numbers
      let secondNum = parseInt(second);
      let result = compute(firstNum, secondNum, op); // Compute expression
      let newExpression: StoredExpression = {
        // Create history item
        first: firstNum,
        op: op,
        second: secondNum,
        result: result,
      };
      dispatch(updateHistory(newExpression)); // Updates history
      dispatch(setSubDisplay(mainDisplay)); // Moves current expression to sub display;
      clear(); // Clears current expression
      dispatch(setMainDisplay("" + result)); // Display result
    } else if (history[0] && !(first || op || second)) {
      // History case, recomputes the last typed expression
      let result = compute(history[0].result, history[0].second, history[0].op); // Computes using history
      let newExpression: StoredExpression = {
        // Create history item
        first: history[0].result,
        op: history[0].op,
        second: history[0].second,
        result: result,
      };
      dispatch(updateHistory(newExpression)); // Update history
      dispatch(
        setSubDisplay(
          // Update sub display with repeated expression
          [history[0].result, history[0].op, history[0].second].join(" ")
        )
      );
      clear(); // Clears current expression
      dispatch(setMainDisplay("" + result)); // Display result
    }
    // If neither case is fulfilled, do nothing
  }

  return (
    <div className="row">
      <div className="main-column">
        {/** Display */}
        <Display />

        {/** Number Grid */}
        <NumberGrid enterDigit={enterDigit} />

        {/** Operators */}
        <div>
          <OperatorButton enterOp={enterOperator} value={"+"} />
          <OperatorButton enterOp={enterOperator} value={"-"} />
          <OperatorButton enterOp={enterOperator} value={"*"} />
          <OperatorButton enterOp={enterOperator} value={"/"} />
        </div>

        {/** Enter and Clear Button */}
        <button onClick={enterEnter}>Enter</button>
        <button
          onClick={() => {
            clear();
            dispatch(setMainDisplay(""));
          }}
        >
          Clear
        </button>
      </div>
      <HistoryList history={history} />
    </div>
  );
};
