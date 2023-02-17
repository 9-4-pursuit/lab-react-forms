import React from "react";
import "./Form.css";
import { useState } from "react";


function Form() {

  // handling submit button

  const [selectOption, setSelectOption] = useState('')
  const [textInput, setTextInput] = useState('')
  const [answer, setAnswer] = useState('')
  const [calculated, setCalculated] = useState(false)
  


  function handleSubmit(event) {
    event.preventDefault()

    if(selectOption === ''){
      setAnswer('Invalid input.')
    }else if(selectOption === 'sum') {
      sum()
      setCalculated(!calculated)
    }else if(selectOption === 'average'){
      average()
      setCalculated(!calculated)
    }else if(selectOption === 'mode'){
      mode()
      setCalculated(!calculated)
    }

  }

  function handleSelectChange(event){
    event.preventDefault()
    setSelectOption(event.target.value)

  }

  function handleTextChange(event) {
    setTextInput(event.target.value)

  }

  function sum() {
    
    let total = 0
    let split = textInput.split(',')
    
    split.forEach(num => {
      let number = parseInt(num)
      total += number
      setAnswer(total)
    })
  }

  function average() {
     let total = 0
    
      let split = textInput.split(',')
      split.forEach(num => {
      let number = parseInt(num)
      total += number
     })
     setAnswer(total /= split.length)
  }

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
      <form onSubmit={handleSubmit}>
        <input value={calculated ? "" : textInput} onChange={handleTextChange} id="values" name="values" type="text" />
        <select value={calculated ? "" : selectOption} onChange={handleSelectChange} id="operation" name="operation">
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
