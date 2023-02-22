import React, { useState } from "react";
import "./Form.css";

function Form() {

  const [selectOption, setSelectOption] = useState("");
  const [num, setNumbers] = useState(0);
  const [input, setInput] = useState({
    num: "",
    calculate: "",
  });

  function handleSelectChange(event) {
    setSelectOption(event.target.value);
  }

  function handleNumberInputChange(event) {
    setNumbers(event.target.value);
  }

  function handleCalculate(event) {
    event.preventDefault();

    // if (input.num.value < 1 || input.calculate.value < 1) {

    //     let p = document.createElement('p');
    //     document.querySelector('form').appendChild(p);
    //     p.textContent = "invalid input."
   
    // }

    resetForm();
  }

  function handleInput(event) {
    setInput({
      ...input, [event.target.id]: event.target.value
    });
  }

  function resetForm() {
    setInput({
      num: "",
      calculate: "",
    });
  }

  return (
    <form onSubmit={handleCalculate}>
      <input id="values" name="values" type="text" onChange={handleNumberInputChange}/>
      <select id="operation" name="operation" onChange={handleSelectChange}>
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default Form;
