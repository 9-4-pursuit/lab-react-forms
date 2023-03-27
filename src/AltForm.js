import React, { useState } from 'react';

function CalculatorForm() {
  const [numbersString, setNumbersString] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumbersInputChange = (event) => {
    setNumbersString(event.target.value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const handleCalculateClick = () => {
    // Convert the numbers string into an array of numbers
    const numbersArray = numbersString.split(',').map(Number);

    // Calculate the result based on the selected operator
    let result;
    switch (operator) {
      case 'add':
        result = numbersArray.reduce((acc, curr) => acc + curr);
        break;
      case 'subtract':
        result = numbersArray.reduce((acc, curr) => acc - curr);
        break;
      case 'multiply':
        result = numbersArray.reduce((acc, curr) => acc * curr);
        break;
      case 'divide':
        result = numbersArray.reduce((acc, curr) => acc / curr);
        break;
      default:
        result = '';
    }

    // Display the result
    return (result)
  };

  return (
    <>
    <form>
      <label>
        Numbers:
        <input type="text" value={numbersString} onChange={handleNumbersInputChange} />
      </label>
      <label>
        Operator:
        <select value={operator} onChange={handleOperatorChange}>
          <option value="">-- Select an operator --</option>
          <option value="add">+</option>   
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
      </label>
      <button type="button" onClick={handleCalculateClick}>Calculate</button>
    </form>
    <section>
    <p>{handleCalculateClick()}</p>
    </section>
    </>
  );
}

export default CalculatorForm;