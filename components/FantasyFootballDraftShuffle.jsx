import React, { useState } from 'react';

// Define the DynamicInputShuffleComponent
const DynamicInputShuffleComponent = () => {
  
  // Initialize state variables to store the user-specified number of inputs
  const [numberOfInputs, setNumberOfInputs] = useState(0);
  
  // Initialize an array to store the input values
  const [inputValues, setInputValues] = useState([]);
  
  // Initialize state variable to store the shuffled list
  const [shuffledList, setShuffledList] = useState([]);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  // Function to shuffle the input values and update the state
  const shuffleAndSetList = () => {
    const shuffled = shuffleArray([...inputValues]);
    setShuffledList(shuffled);
  };

  // Function to handle changes in input fields
  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };

  return (
    <div>
      {/* Input field for the user to specify the number of inputs */}
      <div>
        <label>Number of Inputs: </label>
        <input type="number" value={numberOfInputs} onChange={(e) => {
          setNumberOfInputs(e.target.value);
          setInputValues(new Array(Number(e.target.value)).fill(''));
        }} />
      </div>

      {/* Dynamically generated input fields */}
      {new Array(Number(numberOfInputs)).fill(null).map((_, index) => (
        <div key={index}>
          <input type="text" value={inputValues[index] || ''} onChange={(e) => handleInputChange(index, e)} />
        </div>
      ))}

      {/* Button to trigger the shuffle */}
      <button onClick={shuffleAndSetList}>Shuffle</button>

      {/* Display the shuffled list on the DOM in a table */}
      <table>
        <thead>
          <tr>
            <th>Output Names</th>
          </tr>
        </thead>
        <tbody>
          {shuffledList.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default DynamicInputShuffleComponent;
