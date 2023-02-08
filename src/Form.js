import React, { useState } from "react";
import "./Form.css";

function Form() {

  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("")
  const [err, setErr] = useState(false)


  function calculateNum (numbers) {
    let array = numbers.split 
    let sumNum = numbers.split(",").reduce((total, current) => (total += Number(current)), 0);
    if (operation === "sum") {
       return sumNum 
    } 
    if (operation === "average") { 
      return sumNum/array.length 
    }
    if (operation === "mode") {
      let mode = 0;
    let occurence = 1;
    numbers.split(",").forEach((num) => {
      if (numbers.split(num).length > occurence) {
        mode = num;
        occurence = numbers.split(num).length;
      }
    });
    return mode;
  }
}

  //get imputed numbers
  const handleNums = (event) => {
    setNumbers(event.target.value)
  }


  // get selected operation
  const handleSelectChange = (event) => {
    setOperation(event.target.value)
  }

  function reset () {
    setNumbers("")
    setOperation("")
  }


  const submitCalculate = (event) => {
    event.preventDefault();
    if (!numbers || !operation) {
    setErr(true) 
    setResult("Invalid input.")
    } else {
    setErr(false)
    reset()
    setResult(calculateNum(numbers))
    }
  }

  return (
    <>
      <form onSubmit={submitCalculate}>
        <input 
        className={err ? "error" : ""}
        id="values" 
        name="values" 
        type="text" 
        value={numbers}
        onChange={handleNums}/>


        <select 
        className={err ? "error" : ""}
        id="operation" 
        name="operation" 
        value={operation}
        onChange={handleSelectChange}>

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
