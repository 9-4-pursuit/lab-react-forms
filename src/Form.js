import React from "react";
import { useState } from "react";
import "./Form.css";

function Form() {
  // State to hold the input of numbers
  const [values, setValues] = useState("");
  // State to hold the result of the operation
  const [result, setResult] = useState("");
  // State to hold the selected operation
  const [operation, setOperation] = useState("");
  // State to hold the validity of the input
  const [validInput, setValidInput] = useState("");

  // Function to handle the form submit event
  const handleSubmit = (event) => {
    // Prevent default form submit behavior
    event.preventDefault();

    try {
      // Get the input value
      const inputValue = event.target.values.value;

      // Check if the input is empty or contains non-numeric characters
      if (inputValue === "" || /[A-Za-z]/.test(inputValue)) {
      // Throw an error if the input is invalid
        throw new Error("Not a number.");
      }

      // Set the input as valid
      setValidInput(true);

      // Split the input string into an array of integers
      const numValues = inputValue.split(",").map((element) => Number(element));
      // Get the selected operation
      const operation = event.target.operation.value;

      // Calculate the result of the operation
      const result = calculateNumValues(operation, numValues);

      // Set the result state
      setResult(result);
      
      // Reset the values and operation state
      setValues("");
      setOperation("");
    
    } catch (error) {
      // Set the input as invalid
      setValidInput(false);
      // Set the result state to display an error message
      setResult("Invalid input.");
      // Log the error to the console
      console.log(error);
    }
  };

  // Function to calculate the result of the operation
  const calculateNumValues = (operation, numValues) => {
    // Get the sum of all the numbers in the array
    const totalSum = numValues.reduce((accummulator, current) => accummulator + current, 0);
  
    // Check if the operation is "sum"
    if (operation === "sum") {
      return totalSum;
    }
  
    // Check if the operation is "average"
    if (operation === "average") {
      // Calculate the average of the numbers
      const Avg = totalSum / numValues.length;
      return Avg;
    }
  
    // Check if the operation is "mode"
    if (operation === "mode") {
      // Create an object to store the frequency of each number
      const recurringObj = {};
  
      let sameNum = 1;
  
      let mode = numValues[0];
  
      // Loop through the numbers in the array
      for (const num of numValues) {
        // If the number is not in the frequency object, add it with a frequency of 1
        if (!recurringObj[num]) {
          recurringObj[num] = 1;
        } else {
          // If the number is already in the frequency object, increase its frequency by 1
          recurringObj[num]++;
        }
          //If the number in the frequency object is greater than the number repeated
          //If the number appears more times than any other number seen so far
          // update the variable to keep track of that number as the current mode.
        if (recurringObj[num] > sameNum) {
          sameNum = recurringObj[num];
          mode = num;
        }
      }
  
      return mode;
    }
  };

  return (
    <>
      <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input id="values" name="values" type="text" value={values} onChange={(event) => setValues(event.target.value)} className={validInput ? null : "error"} />
        <select id="operation" name="operation" value={operation} onChange={(event) => setOperation(event.target.value)} className={validInput ? null : "error"}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <h1>{result}</h1>
    </div>
    </>
  );
}

export default Form;