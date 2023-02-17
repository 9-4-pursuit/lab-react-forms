import React from "react";
import "./Form.css";
import { useState } from "react";



function Form() {

  const [textEntry, updateText] = useState("");
  const [selectOption, updateSelectOption] = useState("");

  function updateTextEntry(event) {
    updateText(event.target.value)
  }

  function updateSelectOptionEntry(event) {
    updateSelectOption(event.target.value)
  }

  function numberTest(currentValue) {
    return !isNaN(Number(currentValue));
  }
  function onSubmitCalculate(event) {
    event.preventDefault();
    const arrayInputs
    const

  }
  return (
    <>
      <form>
        <input onChange={updateTextEntry}id="values" name="values" type="text" />
        <select onChange={updateSelectOptionEntry} id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onSubmit={onSubmitCalculate} type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;