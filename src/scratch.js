
import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {

  const [values, setValues] = useState("")
  const [selectOption, setSelectOption] = useState("");

 

  function handleInputChange(event) {
    setValues(event.target.value);
  }
  
  function handleSelectChange(event){
    setSelectOption(event.target.value);
    console.log("selectOption is ", event.target.value)
  }

  function handleSubmitEvent(event){
    event.preventDefault();
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
      handleInputChange(values)
      let sum = 0
      for (let i=0; i < newNumbers.length; i++) {
        sum += newNumbers[i];
      }
      console.log(sum)
      let result = sum
      return result
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
      console.log(max)
      let result = max
      return result
    }

    //add all numbers and divide by number of numbers
    function averageNumbers(numbers){
      // const newNumbers = numbers.split(",").map(Number);
      const newNumbers = numbers.split(",").map((element) => Number(element));
      let divider=newNumbers.length;
      let sum=0;
      for(let i=0; i < newNumbers.length; i++) {
        sum+= newNumbers[i];
        console.log(i)
      }
      console.log(sum);
      console.log(sum/divider)
      let result = sum/divider
      return result
    }

    console.log("This is line 108")
}


  return (
    <>
      <form onSubmit={handleSubmitEvent}>
        <input id="values" className="values" type="text" />
        <select id="operation" className="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p>result to go here</p>
      </section>
    </>
  );
}

export default Form;



