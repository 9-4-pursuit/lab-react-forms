import React from "react";
import { useState } from "react";
import "./Form.css";

function Form(props) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [err, setErr] = useState(false)
  //add props from App.js
  const { setOutput } = props;

//user actions
//input the number in empty field
function userInput(event) {
  const { value } = event.target;
  setInput(value);
};
//select the type of operation - sum, mode, average
function userSelect(event) {
  const { value } = event.target;
  setSelect(value);
};

//create reset
function reset () {
  setInput("")
  setSelect("")
}

//submit button and error
function userSubmit(event) {
event.preventDefault();
if (!input || !select) {
  setErr(true)
  setOutput("Invalid input.");
} else {
  setErr(false)
  reset()
  let result = runOperation(input, select);
  setOutput(result)
  }
};

//Operations chosen - sum, average, mode
//sum
const runOperation = (input, select) => {
  if(select === "sum") {
    let sum = 0;
    let num = input.split(",");

    num.map((nums) => {
      sum += nums * 1;
    });
    return sum;
  }
//average
if(select === "average") {
  let sum = 0;
  let num = input.split(",");

//mode
num.map((nums) => {
  sum += nums * 1;
})
  return sum / num.length;
  }
if(select === "mode") {
  let num = input.split(",");

  function getMode(array) {
    const obj = {};
    array.forEach((number) => {
      if(!obj[number]) {
        obj[number] = 1;
      } else {
        obj[number] += 1;
      }
      });
      let highestValue = 0;
      let highestValueKey = -Infinity;
      for (let key in obj) {
        const value = obj[key];
        if (value > highestValue) {
          highestValue = value;
          highestValueKey = key;
        }
      }
      return Number(highestValueKey);
    }
    return getMode(num);
  }
};

  return (
    <>
      <form onSubmit={userSubmit}>
        <input
        className={err ? "error" : ""}
        id="values" 
        name="values" 
        type="text" 
        onChange={userInput}
        value={input}
        />
        
        <select
        className={err ? "error" : ""}
        id="operation" 
        name="operation"
        onChange={userSelect}
        value={select}>
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


//   const [numbers, setNumbers] = useState("");
//   const [result, setResult] = useState(null);
//   const [Method, setMethod] = useState("")
//   const [error, setError] = useState(false)
//   let addingNumbs = numbers.split(",").reduce((total, current) => (total += Number(current)), 0);
//   let averageNumb = addingNumbs/numbers.length
//   function modeOps (numbers){
//     let mode = 0;
//     let occurence = 1;
//     numbers.split(",").forEach((numb) => {
//       if (numbers.split(numb).length > occurence) {
//         mode = numb;
//         occurence = numbers.split(numb).length;
//       }
//     });
//     return modeOps;
//   }



//   return (
//     <>
//       <form>
//         <input id="values" name="values" type="text" />
//         <select id="operation" name="operation">
//           <option value=""></option>
//           <option value="sum">sum</option>
//           <option value="average">average</option>
//           <option value="mode">mode</option>
//         </select>
//         <button type="submit">Calculate</button>
//       </form>
//       <section id="result">
//         <p></p>
//       </section>
//     </>
//   );
// }

// export default Form;

// import React from "react";
// import "./Form.css";

// function Form() {
//   return (
//     <form>
//       <input id="values" name="values" type="text" />
//       <select id="operation" name="operation">
//         <option value=""></option>
//         <option value="sum">sum</option>
//         <option value="average">average</option>
//         <option value="mode">mode</option>
//       </select>
//       <button type="submit">Calculate</button>
//     </form>
//   );
// }

// export default Form;
