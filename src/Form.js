
import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {

  const [values, setValues] = useState("")
  const [result, setResult] = useState("")
  const [selectOption, setSelectOption] = useState("");


  const [error, setError] = useState(false)


  /*Guard Clause  - move to calculate button
    if any letters are in the input, return "Invalid input."
    if no operation is selected, return "Invalid input."
*/





  function handleInputChange(event) {
    setValues(event.target.value);

  }
  
  function handleSelectChange(event){
    setSelectOption(event.target.value);
    console.log("selectOption is ", event.target.value)
  }



  function handleSubmitEvent(event){
    event.preventDefault();
    setError(false) // resetting the Error state

    //guard clause one, for operation
    if(!selectOption){
    setError(true);
    return;
    }

    //guard clause two, for numbers only
    // if (values.trim().length === 0 || values[values.length - 1] === ',' || /[-,^0-9,]/.test(values)) {


    const regex = /^[0-9 ,]+$/; // matches numbers, spaces, and commas
    if (!regex.test(values)) {
      setError(true);
      return;
      }
    console.log("Form Submitted!");

    let operation = selectOption
    console.log(operation)
    if (operation === "sum") {
      sumNumbers(values)
    } else if (operation === "average") {
      averageNumbers(values)
    } else if (operation === "mode") {
      modeNumbers(values)
    }



    function sumNumbers(values){
      //split the inputs into individual numbers and sum them
      const newNumbers = values.split(",").map(Number);
      let sum = 0
      for (let i=0; i < newNumbers.length; i++) {
        sum += newNumbers[i];
      }
      console.log(sum);
      setResult(sum);
      setValues("");
    }

        //number that appears most often
    function modeNumbers(numbers){
      const newNumber = numbers.split(",").map(Number);
      const mode = {};
      let max = 0;
      let count = 0;
      for(let i=0; i < newNumber.length; i++){
        const item = newNumber[i];
        if(mode[item]) {
          mode[item]++;
        }else {
          mode[item] = 1;
        }
      if(count < mode[item]){
        max = item;
        count = mode[item];
      }
      }
      console.log(max);
      setResult(max);
      setValues("");
    }

    //add all numbers and divide by number of numbers
    function averageNumbers(numbers){
      // const newNumbers = numbers.split(",").map(Number);
      const newNumbers = numbers.split(",").map((element) => Number(element));
      let divider=newNumbers.length;
      let sum=0;
      for(let i=0; i < newNumbers.length; i++) {
        sum+= newNumbers[i];
      }
      console.log(sum);
      console.log(sum/divider);
      setResult(sum/divider);
      setValues("");
    }
}


  return (
    <>
      <form onSubmit={handleSubmitEvent}>
        <input id="values" className="values" type="text" value={values} onChange={handleInputChange}/>
        <select id="operation" className="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      {error && (
        <section id="error">
          <p>Invalid input.</p>
        </section>
      )}
      <section id="result">
        <p>Answer: {result}</p>
      </section>
    </>
  );
}

export default Form;