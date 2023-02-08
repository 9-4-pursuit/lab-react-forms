import React, { useState } from "react";
import "./Form.css";

function calculateCuratedInput(curatedInput, selectedOperator) {

  // do your 3 conditionals
    const totalSum = curatedInput.reduce((acc, curr) => acc + curr, 0);
  
    if (selectedOperator === "sum") {
      return totalSum;
    }
  
    if (selectedOperator === "average") {
      const numAvg = totalSum / curatedInput.length;
      return numAvg;
    }
  
    if (selectedOperator === "mode") {
      const frequencyObj = {};
  
      let numRepeated = 1;
  
      let numMode = curatedInput[0];
  
      for (const num of curatedInput) {
        if (!frequencyObj[num]) {
          frequencyObj[num] = 1;
        } else {
          frequencyObj[num]++;
        }
  
        if (frequencyObj[num] > numRepeated) {
          numRepeated = frequencyObj[num];
          numMode = num;
        }
      }
  
      return numMode;
    }
}

function Form() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const reg = /[a-zA-Z]/;
  const [isValidInput, setIsValidInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const submission = event.target.values.value;
      if (reg.test(submission) || submission == "") {
        throw new Error("These are not number values.");
      }
      // set the state of variable on 10 to tru below
      setIsValidInput(true);
      //* change state syntax above
      //* curate the data below

      const curatedInput = submission
        .split(",")
        .map((element) => Number(element));
      console.log(curatedInput);

      const selectedOperator = event.target.operation.value;
      console.log(selectedOperator);

      const resultingValue = calculateCuratedInput(
        curatedInput,
        selectedOperator
      );
      setResult(resultingValue)
      setText("")
      setSelectOption("")


    } catch (error) {
      setIsValidInput(false)
      setResult("Invalid input.")
      console.log(error);
    }
  }



  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="values"
          onChange={(event) => setText(event.target.value)}
          name="values"
          type="text"
          value={text}
          className={isValidInput ? null : "error"}
        />
        {/* add the onChange to the select  */}
        <select
          id="operation"
          onChange={(event) => setSelectOption(event.target.value)}
          name="operation"
          value={selectOption}
          className={isValidInput ? null : "error"}
        >
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
