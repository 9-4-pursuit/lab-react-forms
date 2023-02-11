// - An input where the user can enter comma-separated number values in an array.
// - A select input to choose between calculating the sum, the average, and the [mode](https://www.mathsisfun.com/definitions/mode.html) -- the most frequently occurring number.
// - A "Calculate" button that, when pressed, puts the result of the selected operation on the input numbers on the screen.
//   - If the numbers are invalid for some reason, display the exact message `Invalid input.`, keeping the punctuation.
// For example, if the text input contains `1,3,3,7` and the select is set to `sum`, clicking the button should print `14` to the screen.
// Switching the select to `mode` and clicking the button again would replace that with `3`.

import React from "react";
import "./Form.css";
import { useState } from 'react';

function Form({ setResult }) {
  //useState to set values, operation, error
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState("");

  function handleOperations() {
    let arrVal = values.split(",");
    //use reduce to add all of the values
    let total = arrVal.reduce(
      (previous, current) => previous + Number(current),
      0
    );

    if (operation === "sum") {
      return total;
    }
    if (operation === "average") {
      return total / arrVal.length;
    }
    if (operation === "mode") {
      let obj = {};
      let seen = 0;

      arrVal.forEach((val) => {
        if (!obj[val]) {
          obj[val] = 1;
        } else {
          obj[val] += 1;
        }
      });

      for (let val in obj) {
        if (obj[val] > seen) {
          seen = obj[val];
          total = val;
        }
      }
    }
    return total;
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (isNaN(handleOperations()) || !values || !operation) {
      setError("error");
      setResult("Invalid input.");
    } else {
      setResult(handleOperations());
      setOperation("");
      setValues("");
      setError("");
    }
  }
  return(
<form onSubmit={handleFormSubmit}>
      <label htmlFor="values"></label>
      <input
        className={error}
        id="values"
        name="values"
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
      />
      <br />
      <label htmlFor="operation"></label>
      <select
        className={error}
        id="operation"
        name="operation"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}
export default Form;