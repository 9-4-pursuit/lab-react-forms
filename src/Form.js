import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  const [selectOperation, setSelectOperation] = useState("");
  const [inputs, setInputs] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  function handleInput(event) {
    // console.log(event.target.value)
    setInputs(event.target.value);
  };

  function handleSelectChange(event) {
    // console.log(event.target.value);
    setSelectOperation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(selectOperation, inputs)
    calculate(inputs);
    resetForm();
  }

  function handleError() {
    setError(true);
    setResult("Invalid input.")
  }

  function resetForm() {
    setInputs("");
    setSelectOperation("")
  }

  // Function to do our calculations, broken up into 3 edge cases checks
  function calculate() {
    let total = 0;
    const modeObj = {};
    const numArr = inputs.split(",");

    // Creat bucket for the end value
    if (selectOperation) {
      numArr.forEach(num => total += Number(num));

      if (selectOperation === "average") {
        // Same as above, then we divide sum total by length of array
        total /= numArr.length;
      } else if (selectOperation === "mode") {
        numArr.forEach(number => {
          if (modeObj[number]) {
            modeObj[number] += 1;
          } else {
            modeObj[number] = 1;
          }
        });
        total = Object.keys(modeObj).reduce((a, b) => modeObj[a] > modeObj[b] ? a : b);
      }
      setResult(total);
    }
    if (!selectOperation || !inputs || isNaN(total)) {
      handleError();
    } else {
      setError(false);
      resetForm();
    }
    console.log(result)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleInput}
          className={error ? "error" : ""} />
        <select
          id="operation"
          name="operation"
          onChange={handleSelectChange}
          className={error ? "error" : ""}>
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