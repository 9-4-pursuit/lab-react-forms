import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  return (
    <main>
      <p>Enter each number in the array, separated by a ','</p>
      <Form setOutput={setOutput} />
      <section id="result">
        <p>{output}</p>
      </section>
    </main>
  );
}

export default App;


// import React from "react";
// import Form from "./Form";
// import "./App.css";

// function App() {
//   return (
//     <main>
//       <p>Enter each number in the array, separated by a ','</p>
//       <Form />
//       <section id="result">
//         <p></p>
//       </section>
//     </main>
//   );
// }

// export default App;
