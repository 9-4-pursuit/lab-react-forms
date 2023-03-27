import React from "react";
import "./Form.css";
import { useState } from "react";

function Form() {

const [operatorOption, setOperatorOption] = useState("")
const [numbers, setNumbers] = useState([])


// function inputValues(event) {
//   event.preventDefault()
//  let numArr = (numbers.split(","))
//   return (numArr)
 
// }



function testNumber (event){
  event.preventDefault();
let numberValues = event.target.value;
let numArr = numberValues.split(",");
setNumbers(+numArr);
console.log((numbers))
console.log(typeof(numberValues))

let sum = 0

  numArr.forEach((num) => {
    sum = (sum += Number(num))
  });
    console.log(sum)

}


function sum() {
  // let sum = 0

  // inputValues.forEach((num) => {
  //   sum = (sum += Number(num))
  // });
  //   return (sum)
}

function mathMagic(event){
  // event.preventDefault()
  // console.log((inputValues(event)));
// let num = inputValues[0]
// for(let i=0; i< inputValues.length; i++) {
// num += inputValues[i]
// }
// console.log(inputValues)

}

function submit(event) {
  // event.preventDefault()
 
// console.log("submitted")

}

  return (
    <>
      <form>
        <input id="values" name="values" type="text"  />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit" onClick={testNumber}>Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;