Notes

RFP

1) Input: user can enter comma separated number values in an array
2) Select input: sum, average, mode
3) Calculate button: puts result of operation on the screen OR "Invalid input."

Bonus
.Clear input boxes after calculate is clicked
.if input is invalid, do NOT clear input boxes
.Add class of "error" to input and select elements if the inputis invalid. Then change that when they become valid again.

==============================


// note for later:
// numbers
//       .split(",")
//       .reduce((total, current) => (total += Number(current)), 0);

// suggestion from Anima
// function (numbers) {
//   let mode = 0;
//   let occurence = 1;
//   numbers.split(",").forEach((num) => {
//     if (numbers.split(num).length > occurence) {
//       mode = num;
//       occurence = numbers.split(num).length;
//     }
//   });
//   return mode;
// }


//===================

changed         <input id="values" className="values" type="text" /> to
<input id="values" className="values" type="text" value={values} onChange={handleInputChange} /> per ChatGPT


===================


/*
Here are some thoughts:
I am rewatching the Forms video from 2/7/23.
You set up the logic and then you need a function to handle the logic.
Remember that the changing of state is when the user changes something.
In this case, the user is doing two things: putting in numbers and calculating them. 

The form will be submitted with a button, so we should do something onSubmit.
The user can choose the operation. Since that is a dropdown menu, that needs to happen onChange. 
Both of those things should go inside the tag labels.


Should the event.prevent.default be in the form function or the handeSubmitEvent function?

*/

================================


The following didn't work well:


function handleSubmitEvent(event){
    event.preventDefault();
    console.log("event is ", event)
    console.log("Form Submitted!")
    let operation = event.target.value
    if (operation === "sum") {
      sumNumbers()
    } else if (operation === "average") {
      averageNumbers()
    } else if (operation === "mode") {
      modeNumbers()
    }



    function sumNumbers(numbers){
      //split the inputs into individual numbers and sum them
      const newNumbers = Number(numbers.split(","));
      let sum = 0
      for (let i=0; i < newNumbers.length; i++) {
        sum += newNumbers[i];
      }
      console.log(sum)
      return sum
    }

        //number that appears most often
    function modeNumbers(numbers){
      const newNumber = Number(numbers.split(","));
      const mode={}
      let max = 0;
      let count = 0;
      for(let i=0; i < newNumber.length; i++){
        const item = newNumber[i];
        if(mode[item]) {
          mode[item]++;
        }else {
          mode[item] = 1;
        }
      if(count < mode[item]){
        max = item;
        count = mode[item];
      }
      }
      console.log(max)
      return max
    }

    //add all numbers and divide by number of numbers
    function averageNumbers(numbers){
      const newNumbers =Number(numbers.split(","));
      let divider=newNumbers.length;
      let sum=0;
      for(let i=0; i < newNumbers.length; i++) {
        sum+= newNumbers[i];
      }
      console.log(sum/divider)
      return sum/divider
    }

    console.log("line 95")
}

//className={score>99 ? "visible" : "hidden"}
//className={error ? "error" : "noError"}

  return (
    <>
      <form onSubmit={handleSubmitEvent}>
        <input id="values" className="values" type="text" />
        <select id="operation" className="operation" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
      <section id="result">
        <p></p>
      </section>
    </>
  );
}

export default Form;
===================
3/21/23
Got rid of 

  // const [operation, setOperation] = useState("")
  // const [value, setValue] = useState("")

  and

  function invalidInput (values) {
    selectOption("")
    console.log("invalid input")
    return "Invalid input."
  }
  //   const allowable = "all"