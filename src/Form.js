
import React from "react";
import "./Form.css";

function Form() {

  // const [input, setInput] = useState("")
  // const [result, setResult] = useState(null)

  // function handleInputFunction(event) = 
  // event.target.value

  function showResult(){

    let operation = event.target.value
    if (operation === "sum") {
      sumNumbers()
    } else if (operation === "average") {
      averageNumbers()
    } else if (operation === "mode") {
      modeNumbers()
    }

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


//if any letters are in the input, return "Invalid input."
//if no operation is selected, return "Invalid input."

  return (
    <>
      <form>
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

// note for later:
// numbers
//       .split(",")
//       .reduce((total, current) => (total += Number(current)), 0);

// suggestion from Anima
// function (numbers) {
//   let mode = 0;
//   let occurence = 1;
//   numbers.split(",").forEach((num) => {
//     if (numbers.split(num).length > occurence) {
//       mode = num;
//       occurence = numbers.split(num).length;
//     }
//   });
//   return mode;
// }
