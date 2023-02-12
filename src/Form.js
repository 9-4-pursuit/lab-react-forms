import { useState } from "react";
import React from "react";
import "./Form.css";

function Form() {
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const inputTextValue = e.target.values.value;
    const operationInput = e.target.operation.value;

    // const inputArray = inputTextValue.split(",").map((el) => Number(el));

    if (/[a-z A-Z]/.test(inputTextValue)) {
      console.log("hello");
      setResult("Invalid input.");
      return;
    } 
    handleOperation(inputTextValue, operationInput);

  }

  function getValues(e) {
    setValues(e.target.value);
  }

  function getOperation(e) {
    setOperation(e.target.value);
  }

  function handleOperation(inputTextValue, operationInput) {
    const valuesArray = inputTextValue.split(",").map((el) => Number(el));
    let resultValue = 0;
    switch (operationInput) {
      case "sum":
        resultValue = valuesArray.reduce((a, b) => a + b, 0);
        break;
      case "average":
        resultValue =
          valuesArray.reduce((a, b) => a + b, 0) / valuesArray.length;
        break;
      case "mode":
        const mode = valuesArray.reduce(
          (a, b, i, arr) =>
            arr.filter((v) => v === a).length >=
            arr.filter((v) => v === b).length
              ? a
              : b,
          null
        );
        resultValue = mode;
        break;
      default:
        resultValue = "Invalid input.";
    }
    setResult(resultValue);
    // result.style.display = "block";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          value={values}
          type="text"
          onChange={getValues}
          // minLength="1"
          // pattern="[0-9,]+"
        />
        <select
          id="operation"
          name="operation"
          value={operation}
          onChange={getOperation}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>{result}</p>
      </section>
    </>
  );
}

export default Form;
