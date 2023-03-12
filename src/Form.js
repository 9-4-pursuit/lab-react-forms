
import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {

  // const [operation, setOperation] = useState("")
  // const [value, setValue] = useState("")
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [selectOption, setSelectOption] = useState("");

  // event.preventDefault()
  // const [error, setError] = useState(false)
  // function invalidInput (numbers) {
  //   const allowable = "all"

  /*Guard Clause  
    if any letters are in the input, return "Invalid input."
    if no operation is selected, return "Invalid input."
*/
  
  // function handleInputFunction(event) = 
  // event.target.value


  function handleSelectChange(event){
    setSelectOption(event.target.value)
    console.log(selectOption)
  }



  function handleSubmitEvent(event){
    event.preventDefault();
    console.log("event is ", event)
    console.log("Form Submitted!")
    let operation = event.target.value
    if (operation === "sum") {
      sumNumbers()
    } else if (operation === "average") {
      averageNumbers()
    } else if (operation === "mode") {
      modeNumbers()
    }



    function sumNumbers(numbers){
      //split the inputs into individual numbers and sum them
      const newNumbers = Number(numbers.split(","));
      let sum = 0
      for (let i=0; i < newNumbers.length; i++) {
        sum += newNumbers[i];
      }
      console.log(sum)
      return sum
    }

        //number that appears most often
    function modeNumbers(numbers){
      const newNumber = Number(numbers.split(","));
      const mode={}
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
      return max
    }

    //add all numbers and divide by number of numbers
    function averageNumbers(numbers){
      const newNumbers =Number(numbers.split(","));
      let divider=newNumbers.length;
      let sum=0;
      for(let i=0; i < newNumbers.length; i++) {
        sum+= newNumbers[i];
      }
      console.log(sum/divider)
      return sum/divider
    }

    console.log("line 95")
}

//className={score>99 ? "visible" : "hidden"}
//className={error ? "error" : "noError"}

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
        <p></p>
      </section>
    </>
  );
}

export default Form;


/*
Here are some thoughts:
I am rewatching the Forms video from 2/7/23.
You set up the logic and then you need a function to handle the logic.
Remember that the changing of state is when the user changes something.
In this case, the user is doing two things: putting in numbers and calculating them. 

The form will be submitted with a button, so we should do something onSubmit.
The user can choose the operation. Since that is a dropdown menu, that needs to happen onChange. 
Both of those things should go inside the tag labels.


Should the event.prevent.default be in the form function or the handeSubmitEvent function?

*/