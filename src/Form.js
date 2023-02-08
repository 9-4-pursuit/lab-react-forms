import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  const [selectOption, setSelectOption] = useState("");
  const [textInput, setTextInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [calculated, setCalculated] = useState(false);


  // this function handles what happens when a user selects an option from the dropdown
  function handleSubmit(event) {
    event.preventDefault();
    if (selectOption === "") {
      setAnswer("Invalid input.");
    } else if (selectOption === "sum") {
      sum()
      setCalculated(!calculated);
    } else if (selectOption === "average") {
      average()
      setCalculated(!calculated);
    }else if (selectOption === "mode") {
      mode()
      setCalculated(!calculated);
    }
  }

    function handleSelectChange(event) {
      setSelectOption(event.target.value);
    }

    function handleTextChange(event) {
      setTextInput(event.target.value);
    }


    // this function handles the user selecting sum 
    function sum() {
      let total = 0;
      let split = textInput.split(",")
      split.forEach(num => {
        let number=parseInt(num);
        total += number;
      })
      setAnswer(total);
    }

    // this function handles the user selecting average 
    function average() {
      let total = 0;
      let split = textInput.split(",")
      split.forEach(num => {
        let number=parseInt(num);
        total += number;
      })

      setAnswer(total /=split.length);
    
    }


    // this function handles the user selecting mode 
    function mode() {
      const obj = {}
       textInput.split(",").forEach((number) => {
         if (!obj[number]) {
           obj[number] = 1
         } else {
           obj[number] += 1
         }
       })
       let highestValue = 0
       let highestValueKey = ""
     
       for (let key in obj) {
         const value = obj[key];
         if (value > highestValue){
           highestValue = value
           highestValueKey = key
         }
       }
       setAnswer(highestValueKey)
     
       }

    return (
      <>
        <form onSubmit={(event) => handleSubmit(event)} >
          <input value={calculated ? "" : textInput} onChange={handleTextChange} id="values" name="values" type="text" />
          <select value={calculated ? "" : selectOption} id="operation" name="operation" onChange={handleSelectChange}>
            <option value=""></option>
            <option value="sum">sum</option>
            <option value="average">average</option>
            <option value="mode">mode</option>
          </select>
          <button type="submit">Calculate</button>
        </form>
        <section id="result">
          <p>{answer}</p>
        </section>
      </>
    );
  }


export default Form;
