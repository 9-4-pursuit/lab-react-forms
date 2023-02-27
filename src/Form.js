import React from "react";
import "./Form.css";
import { useState } from "react";

function Form({ setResult }) {
  //useState to set values, operation, error
  const [values, setValues] = useState("");
  const [operation, setOperation] = useState("");
  const [error, setError] = useState("");

  function handleOperations() {
    let arrVal = values.split(",");
    //use reduce to add all of the values
    let total = arrVal.reduce(
      (previous, current) => previous + Number(current),
      0
    );

    if (operation === "sum") {
      return total;
    }
    if (operation === "average") {
      return total / arrVal.length;
    }
    if (operation === "mode") {
      let obj = {};
      let seen = 0;

      arrVal.forEach((val) => {
        if (!obj[val]) {
                obj[val] = 1;
        } else {
                obj[val] += 1;
        }
      });

              for (let val in obj) {
        if (obj[val] > seen) {
                seen = obj[val];
              total = val;
        }
      }
    }
              return total;
  }

              function handleFormSubmit(event) {
                event.preventDefault();

              if (isNaN(handleOperations()) || !values || !operation) {
                setError("error");
              setResult("Invalid input.");
    } else {
                setResult(handleOperations());
              setOperation("");
              setValues("");
              setError("");
    }
  }
              return(
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="values"></label>
                <input
                  className={error}
                  id="values"
                  name="values"
                  type="text"
                  value={values}
                  onChange={(e) => setValues(e.target.value)}
                />
                <br />
                <label htmlFor="operation"></label>
                <select
                  className={error}
                  id="operation"
                  name="operation"
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                >
                  <option value=""></option>
                  <option value="sum">sum</option>
                  <option value="average">average</option>
                  <option value="mode">mode</option>
                </select>
                <button type="submit">Calculate</button>    </form>
              );
}

              export default Form;
