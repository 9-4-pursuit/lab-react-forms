import React from "react";
import "./Form.css";
import { useState } from "react";
function Form() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [operation, setOperation] = useState("sum");
  const [result, setResult] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleOperationChange = (event) => {
    event.preventDefault();
    setOperation(event.target.value);
  };
  const mode = (arr) => {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return max;
  };
  const handleButtonClick = (event) => {
    event.preventDefault();
    const regex = /^-?\d+(\.\d+)?$/; // regular expression for valid numbers
    const numbers = input.split(",");
    const isValidInput = numbers.every((number) => regex.test(number.trim()));
    const sum = numbers.reduce((acc, curVal) => acc + curVal, 0);

    if (!isValidInput) {
      setError("Invalid input.");
    } else {
      if (operation === "average") {
        const average = sum / numbers.length; // calculate average
        setResult(average.toString()); // update result with the average
      } else if (operation === "sum") {
        setResult(sum.toString());
      } else if (operation === "mode") {
        setResult(mode(sum));
      }
    }
    return;
  };

  console.log(input, operation, result);
  return (
    <div>
      <form>
        <input
          id="values"
          name="values"
          type="text"
          value={input}
          onChange={handleInput}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleOperationChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={handleButtonClick} type="submit">
          Calculate
        </button>
      </form>
      <div>{error}</div>
      <p>{result}</p>
    </div>
  );
}

export default Form;
