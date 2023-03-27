import React from "react";
import Form from "./Form";
import CalculatorForm from "./AltForm";
import "./App.css";

function App() {
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      {/* <Form /> */}
      <CalculatorForm/>
    </main>
  );
}

export default App;