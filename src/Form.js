import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [textInput, setTextInput] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [result, setResult] = useState("");

  function handleTextChange(event) {
    //user's text input value.
    setTextInput(event.target.value);
  }

  function handleSelectChange(event) {
    //user's option value.
    setSelectOption(event.target.value);
  }

  function resetForm() {
    setTextInput("");
    setSelectOption("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculate();
    resetForm();
  }

  function calculate() {
    let total = 0;
    const objMode = {};
    const arr = textInput.split(",");

    if(selectOption === "" || textInput === "") {
      setResult("Invalid input.");
    } else {
      //sum
      arr.forEach(num => total += Number(num));
      console.log(total)
      
      //average & mode
      if(selectOption === "average") {
        //get the value from sum, then divide it by the length of the array.
        total /= arr.length;

      } else if(selectOption === "mode") {
        // //the first index is the number repeated,
        // //the second index is the repetition number.
        // let repeatedNum = 0;
        // let repeatedTimes = 1;

        arr.forEach(num => {
          if(objMode[num]) {
            objMode[num] += 1;
          } else {
            objMode[num] = 1;
          }

          // //compare it and assign the number and its repetition number to the variables.
          // if(objMode[num] > repeatedNum) {
          //   repeatedNum = num;
          //   repeatedTimes = objMode[num];
          // }
        });

        total = Object.keys(objMode).reduce((a, b) => objMode[a] > objMode[b] ? a : b);
      }
      setResult(total);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input id="values" name="values" type="text" value={textInput} onChange={handleTextChange} />
        <select id="operation" name="operation" onChange={handleSelectChange}>
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