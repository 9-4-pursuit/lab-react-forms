import React, { useState } from "react";
import "./Form.css";

function Form() {
const [text, setText] = useState("")
const [selectOption, setSelectOption]= useState("")
const [result, setResult] = useState("")
const reg = /[a-z A-Z]/

function handleTextChange(e){
  setText(e.target.value)
}

function handleSelectOption(e){
  setSelectOption(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  validInput(e)
  changingResult()
  console.log(sumWithInitial)
}

function validInput(){
  if (reg.test(text) || text == ""){
    console.log(reg, 'this is reg')
    setText(text)
  } else {
    setText("")
  }
}

let newArr = text.split(',')


const initialValue = 0;
const sumWithInitial = newArr.reduce(
  (acc, curr) => Number(acc) + Number(curr),
  initialValue
);

const average = sumWithInitial/(newArr.length)

function findMode(array) {
  let object = {}

  for (let i = 0; i < array.length; i++) {
    if (object[array[i]]) {
     
      object[array[i]] += 1
    } else {
     
      object[array[i]] = 1
    }
  }

 
  let biggestValue = -1
  let biggestValuesKey = -1

  
  Object.keys(object).forEach(key => {
    let value = object[key]
    if (value > biggestValue) {
      biggestValue = value
      biggestValuesKey = key
    }
  })

  return biggestValuesKey

}


function changingResult(){
  if (reg.test(text) || text == ""){
    setResult('Invalid input.')
  } if(selectOption == 'sum'){
      setResult(sumWithInitial)
    }  if(selectOption == 'average'){
      setResult(average)
    }if(selectOption == 'mode'){
      setResult(findMode(newArr))
    }
}




  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" onChange={handleTextChange} name="values" type="text" value={text}/>
        <select id="operation" name="operation" onChange={handleSelectOption}>
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