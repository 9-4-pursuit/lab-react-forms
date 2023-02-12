// import React from "react";
// import "./Form.css";

// function Form() {
//   return (
//     <form>
//       <input id="values" name="values" type="text" />
//       <select id="operation" name="operation">
//         <option value=""></option>
//         <option value="sum">sum</option>
//         <option value="average">average</option>
//         <option value="mode">mode</option>
//       </select>
//       <button type="submit">Calculate</button>
//     </form>
//   );
// }

// export default Form;

import React from "react";
import "./Form.css";
import { useState } from 'react';


function Form() {

  const [textEntry, updateInputText] = useState("");
  const [selectOption, updateSelectOption] = useState("");
  const [textOutput, updateTextOutput] = useState("");
  const [errorClass, updateErrorClass] = useState(false);

  function errorClassTrue(event) {
    updateErrorClass(true);
    event.target.values.classList.add('error');
    event.target.operation.classList.add('error');
  }
  function errorClassFalse(event) {
    updateErrorClass(false);
    event.target.values.classList.remove('error');
    event.target.operation.classList.remove('error');
  }

  function updateTextEntry(event) {
    updateInputText(event.target.value)
  }

  function updateSelectOptionEntry(event) {
    updateSelectOption(event.target.value)
  }

  function numberTest(currentValue) {
    return !isNaN(Number(currentValue));
  }

  function clearInputBoxes(event) {
    event.target.values.value = "";
    event.target.operation.value = "";
    updateInputText("");
    updateSelectOption("");
  }

  function onSubmitCalculate(event) {
    event.preventDefault();
    const arrayInputs = textEntry.split(",").map(Number);
    console.log(arrayInputs);
    if (textEntry === "") {
      updateTextOutput("Invalid input.");
      errorClassTrue(event);
      return "";
    } else if (!arrayInputs.every(numberTest)) {
      updateTextOutput("Invalid input.");
      errorClassTrue(event);
      return "";
    } else if (selectOption === "") {
      updateTextOutput("Invalid input.")
      errorClassTrue(event);
      return "";
    } // if no "if" triggers then valid input
    if (selectOption === "sum") {
      updateTextOutput(arrayInputs.reduce((x, y) => (x + y)));
    }
    if (selectOption === "average") {
      updateTextOutput(arrayInputs.reduce((x, y) => (x + y)) / arrayInputs.length);
    }
    if (selectOption === "mode") {
      const calcMode = arr => {
        const mode = {};
        let max = 0, count = 0;

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
      }
      updateTextOutput(calcMode(arrayInputs));

    }
    errorClassFalse(event);
    clearInputBoxes(event);
  }

    return (
      <>
        <form onSubmit={onSubmitCalculate}>
          <input onChange={updateTextEntry} id="values" name="values" type="text"/>
          <select onChange={updateSelectOptionEntry} id="operation" name="operation">
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <section id="result">
          <p>{textOutput}</p>
        </section>
      </>
    );
  }

  export default Form;