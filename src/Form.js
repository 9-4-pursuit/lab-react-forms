import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [textInput, setTextInput] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

  function handleTextChange(event) {
    //user's text input value.
    setTextInput(event.target.value);
  }

  function handleSelectChange(event) {
    //user's option value.
    setSelectOption(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculate();
  }

  function handleError() {
    setError(true);
    setResult("Invalid input.");
  }

  function resetForm() {
    setTextInput("");
    setSelectOption("");
  }

  function calculate() {
    let total = 0;
    const objMode = {};
    const arrOfNum = textInput.split(",");
    console.log(textInput)
    
    if (selectOption) {
      //sum
      arrOfNum.forEach(num => total += Number(num));
      
      //average & mode
      if(selectOption === "average") {
        //get the value from sum, then divide it by the length of the array.
        total /= arrOfNum.length;

      } else if(selectOption === "mode") {
        arrOfNum.forEach(num => {
          if(objMode[num]) {
            objMode[num] += 1;
          } else {
            objMode[num] = 1;
          }
        });

        //find the highest value
        total = Object.keys(objMode).reduce((a, b) => objMode[a] > objMode[b] ? a : b);

        // //compare it and assign the number and its repetition number to the variables.
        // let repeatedNum = 0;
        // let repeatedTimes = 1;
        // for(let num in objMode) {  
        //   if(objMode[num] > repeatedNum) {
        //     repeatedNum = num;
        //     repeatedTimes = objMode[num];
        //   }
        // }
        // total = repeatedNum
      }
      setResult(total);
    }

    //conditional to handle errors, or hide the class and reset the form.
    if(!selectOption || !textInput || isNaN(total)) {
      handleError();
    } else {
      setError(false);
      resetForm();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input id="values" name="values" type="text"
          value={textInput} onChange={handleTextChange}
          className={error ? "error" : ""}
        />
        <select id="operation" name="operation"
          value={selectOption} onChange={handleSelectChange}
          className={error ? "error" : ""}
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