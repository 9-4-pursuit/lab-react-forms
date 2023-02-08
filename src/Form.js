import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  const [selectOperation, setSelectOperation] = useState("");
  const [inputs, setInputs] = useState(0);
  // const [inputArr, setInputArr] = useState([])

  function handleInput(event) {
    setInputs(event.target.value.split(',').map(Number));
    console.log(event.target.value)
  };

  function handleSelectChange(event) {
    console.log(event.target.value);
    setSelectOperation(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Calculate", selectOperation, inputs)
    let resultP = document.querySelector('#result p');
    resultP.innerText = calculate(inputs);
  }

  // Function to do our calculations, broken up into 3 edge cases checks
  function calculate(numArr) {
    // Creat bucket for the end value
    let resultNum = 0;
    if (selectOperation === "sum") {
      // Take ARR param and using REDUCE, we add up each element
      resultNum = numArr.reduce((prev, curr) => prev + curr)
    } else if (selectOperation === "average") {
      // Same as above, then we divide sum total by length of array
      resultNum = numArr.reduce((prev, curr) => prev + curr) / numArr.length;
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
      resultNum = Number(highestValueKey);
    }
    console.log(resultNum)
    return resultNum;
  }

  return (
    <>
      <form>
        <input id="values" name="values" type="text" onChange={handleInput} />
        <select id="operation" name="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;