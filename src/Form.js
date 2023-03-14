import React from "react";
import "./Form.css";
import { useState } from "react";
function Form() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    // if (input.length === 0) {
    //   setError("Invalid input.");
    // }
  };
  const handleButtonClick = (event) => {
    event.preventDefault();
    if (input.length === 0) {
      setError("Invalid input.");
    }
    if (typeof input !== "number") {
      setError("Invalid input.");
    }
    return;
  };
  console.log(input);
  return (
    <div>
      <form>
        <input
          id="values"
          name="values"
          type="text"
          value={input}
          onChange={handleInput}
        />
        <select id="operation" name="operation">
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button onClick={handleButtonClick} type="submit">
          Calculate
        </button>
      </form>
      <div>{error}</div>
    </div>
  );
}

export default Form;
