import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

  const [numbers, setNumbers] = useState('');
  const [selectOption, setSelectOption] = useState('');
  const [result, setResult] = useState('')
  

  function handleInput(event) {
    setNumbers(event.target.value)
  }

  function toggleSelectOption(event) {
    setSelectOption(event.target.value)
  }

  function resetInputs(event) {
    event.target.values.value = '';
    event.target.operation.value = '';
    setNumbers('');
    setSelectOption('');
  }

  function calculate(event) {
    event.preventDefault();
    const inputArray = numbers.split(',');
    let outputText = ''
    if(!inputArray.every((element) => { return (!isNaN(Number(element))) }) || selectOption === ''){
      setResult('Invalid input.')
    } else {
        switch (selectOption) {
          case "sum":
              let addTotal = inputArray.reduce((acc, current) => {
                  return acc + Number(current);
              }, 0)
              setResult(addTotal);
              break;
          case "average":
              let avgTotal = inputArray.reduce((acc, current) => {
                  return acc + Number(current);
              }, 0)
              let average = avgTotal / inputArray.length
              setResult(average);
              break;
          case "mode":
              const numObj = {};
              const max = [0, 0]
              inputArray.forEach((num) => {
                  if (numObj[num] === undefined) {
                      numObj[num] = 1;
                  } else {
                      numObj[num] += 1;
                  }

                  if (numObj[num] >= max[1]) {
                      max[0] = num;
                      max[1] = numObj[num];
                  }
                  console.log(numObj)
              })
              setResult(max[0]);
              break;
          default:
              break;
      }
      resetInputs(event);
      }
  }


  return (
    <>
      <form onSubmit={calculate}>
        <input id="values" name="values" type="text" onChange={handleInput} />
        <select id="operation" name="operation" onChange={toggleSelectOption}>
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
