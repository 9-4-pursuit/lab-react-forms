import React from "react";
import "./Form.css";

function Form() {
  

  function notANum() {
    let input = document.getElementById("values")
    let arr = input.value.split(",")
    arr.find((element) => {
      if(Number(element) === NaN){
        return element
      }
    })

  }

  function invalidInput() {
    let op = document.getElementById("operation")
    let p = document.querySelectorAll("p")
    let input = document.getElementById("values")
    if (op.value === ""){
      p[1].innerText = "Invalid input."
      return true
    } else 
    return false
  }

  function sum() {
    let op = document.getElementById("operation")
    let p = document.querySelectorAll("p")
    let input = document.getElementById("values")
    let arr = input.value.split(",")
    console.log(arr)
    if(op.value === "sum" & notANum() !== NaN){
      input.value = ""
      op.value = ""
      p[1].innerText = (arr.reduce((a, c) => Number(a) + Number(c)))
    }
  }
  function average() {
    let op = document.getElementById("operation")
    let p = document.querySelectorAll("p")
    let input = document.getElementById("values")
    let arr = input.value.split(",")
    console.log(arr)
    if(op.value === "average" & notANum() !== NaN){
      input.value = ""
      op.value = ""
      p[1].innerText = (arr.reduce((a, c) => Number(a) + Number(c)) / arr.length)
    }
  }

  function mode() {
    let op = document.getElementById("operation")
    let p = document.querySelectorAll("p")
    let input = document.getElementById("values")
    let arr = input.value.split(",")
    console.log(arr)
      let object = {}
    if(op.value === "mode" & notANum() !== NaN){
      for (let i = 0; i < arr.length; i++) {
        if (object[arr[i]]) {
          object[arr[i]] += 1
        } else {
          object[arr[i]] = 1
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
        return biggestValuesKey
      })
      input.value = ""
      op.value = ""
      p[1].innerText = biggestValuesKey
    }
  }


  function handleSubmit(event) {
   event.preventDefault()
   invalidInput()
   sum()
   average()
   mode()
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" />
        <select id="operation" name="operation">
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
