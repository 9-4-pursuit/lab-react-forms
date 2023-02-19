import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {
  const [selectOption, setSelectOption] = useState("");
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (selectOption === "") {
      setResult("Invalid input.");
    } else if (selectOption === "sum") {
      sum();
      setCalculated(!calculated);
    } else if (selectOption === "average") {
      average();
      setCalculated(!calculated);
    } else if (selectOption === "mode") {
      mode();
      setCalculated(!calculated);
    }
  }

  function handleSelectChange(event) {
    event.preventDefault();
    setSelectOption(event.target.value);
  }

  function handleTextChange(event) {
    setTextInput(event.target.value);
  }

  function sum() {
    let total = 0;
    let arr = textInput.split(",");

    arr.forEach((num) => {
      let number = parseInt(num);
      total += number;
      setResult(total);
    });
  }

  function average() {
    let total = 0;
    let arr = textInput.split(",");
    
    arr.forEach((num) => {
      let number = parseInt(num);
      total += number;
    });
    setResult((total /= arr.length));
  }

  //https://dev.to/colerau/how-to-find-the-mode-most-repeating-number-of-an-array-in-javascript-78p
  function mode() {
    const obj = {};
    textInput.split(",").forEach((number) => {
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
    });
    let highestValue = -1;
    let highestValueKey = -1;

    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }
    setResult(highestValueKey);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          name="values"
          type="text"
          onChange={handleTextChange}
        />
        <select
          id="operation"
          name="operation"
          onChange={handleSelectChange} 
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
