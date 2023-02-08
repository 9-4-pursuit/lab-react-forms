import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  const [selectOperation, setSelectOperation] = useState("");
  const [inputs, setInputs] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  function handleInput(event) {
    console.log(event.target.value)
    setInputs(event.target.value.split(',').map(Number));
  };

  function handleSelectChange(event) {
    console.log(event.target.value);
    setSelectOperation(event.target.value);
  }

  function handleSubmit(event) {
    if (!inputs || !selectOperation) {
      console.log("Invalid input.")
      setResult("Invalid input.");
      setError(true);
    }
    if (isNaN(result)) {
      console.log("Invalid input.")
      setResult("Invalid input.");
      setError(true);
    }
    event.preventDefault();
    console.log(selectOperation, inputs)
    calculate(inputs);
  }

  // Function to do our calculations, broken up into 3 edge cases checks
  function calculate(numArr) {
    // Creat bucket for the end value
    if (selectOperation === "sum") {
      // Take ARR param and using REDUCE, we add up each element
      setResult(numArr.reduce((prev, curr) => prev + curr));
    } else if (selectOperation === "average") {
      // Same as above, then we divide sum total by length of array
      setResult(numArr.reduce((prev, curr) => prev + curr) / numArr.length);
    } else if (selectOperation === "mode") {
      // Create an object to fill with properties equal the number found in the ARR, and how many times it has been found
      const obj = {};
      numArr.forEach(number => {
        if (!obj[number]) {
          obj[number] = 1;
        } else {
          obj[number] += 1;
        }
      });
      // Now we find the KEY with the highest VALUE
      let highestValue = 0;
      let highestValueKey = -Infinity;
      // Looping through OBJECT and looking at each key
      for (let key in obj) {
        // Looking at VALUE of each KEY
        const value = obj[key];
        // If that VALUE, is bigger than highestValue, replace it, also save the KEY of that newly found highest VALUE
        if (value > highestValue) {
          highestValue = value;
          highestValueKey = key;
        }
      }
      // Turn that ish back to a number, bc ALL KEYS ARE STRINGS
      setResult(Number(highestValueKey));
    }
    console.log(result)
    return result;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" onChange={handleInput} className={error ? "error" : ""} />
        <select id="operation" name="operation" onChange={handleSelectChange} className={error ? "error" : ""}>
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