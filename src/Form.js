import React, { useState } from "react";
import "./Form.css";

function Form() {

  const [numInput, setNumInput] = useState("");

  const [calculateInput, setCalculateInput] = useState("operation");

  const [result, setResult] = useState("");

  function handleSelection(event) {
    setCalculateInput(event.target.value);
  }

  function handleNumInput(event) {
    setNumInput(event.target.value);
  }

  function resetForm() {
    
    setNumInput("");
    setCalculateInput("");
  }

  function handleCalculate(event) {
    event.preventDefault();

    let arrNumInput = numInput.split(",");
    let total = 0;

    if (calculateInput === "sum") {

      arrNumInput.forEach(num => total += Number(num))
      setResult(total);
    }

    else if (calculateInput === "average") {

      arrNumInput.forEach(num => total += Number(num));
      setResult(total / arrNumInput.length);
    }

    else if (calculateInput === "mode") {

      let modeObj = {};
      let popularNum = 0;
      let popularNumKey = -Infinity;

      arrNumInput.forEach(num => {

        if (!modeObj[num]) {
          modeObj[num] = 1;
        }
        else {
          modeObj[num] += 1;
        }
      })

      for (let key in modeObj) {

        const value = modeObj[key];

        if (value >= popularNum && Number(key) > popularNumKey) {

          popularNum = value;

          popularNumKey = Number(key)
        }
      }

      setResult(popularNumKey);
    }

    if (numInput.length < 1 || calculateInput === "operation" || isNaN(result)) {
      setResult("Invalid input.")
    }

    if (result != "Invalid input.") {
      resetForm();
    }
  }

  return (
    <>
    <form>
      <input id="numbers" name="numbers" type="text" onChange={handleNumInput} />
      <select id="calculation" name="calculation" placeholder="#" onChange={handleSelection}>
        <option value="operation" name="operation" id="operation"> Operation </option>
        <option id="sum" name="sum" value="sum">sum</option>
        <option id="average" name="average" value="average">average</option>
        <option id="mode" name="mode" value="mode">mode</option>
      </select>
      <button type="submit" onClick={handleCalculate}> Calculate! </button>
    </form>
    <section>
      <p> {result} </p>
    </section>
    </>
  );
}

export default Form;