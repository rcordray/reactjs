import React, { useState } from 'react';

// Define the AverageCalculatorComponent
const AverageCalculatorComponent = () => {
  
// Initialize state variables to store five number inputs
const [number1, setNumber1] = useState(0);
const [number2, setNumber2] = useState(0);
const [number3, setNumber3] = useState(0);
const [number4, setNumber4] = useState(0);
const [number5, setNumber5] = useState(0);

// Initialize state variable to store the calculated average
const [average, setAverage] = useState(null);

// Function to calculate the average of the five numbers
const calculateAndSetAverage = () => {
  // Sum all the five numbers and divide by 5 to get the average
  const calculatedAverage = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5)) / 5;
  setAverage(calculatedAverage); // Update the state with the calculated average
};

return (
  <div>
    {/* Input fields arranged vertically */}
    <div><input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)} /></div>
    <div><input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} /></div>
    <div><input type="number" value={number3} onChange={(e) => setNumber3(e.target.value)} /></div>
    <div><input type="number" value={number4} onChange={(e) => setNumber4(e.target.value)} /></div>
    <div><input type="number" value={number5} onChange={(e) => setNumber5(e.target.value)} /></div>

    {/* Button to trigger the average calculation */}
    <button onClick={calculateAndSetAverage}>Calculate Average</button>

    {/* Display the calculated average on the DOM */}
    {average !== null && <div>The average is: {average}</div>}
  </div>
);
};

export default AverageCalculatorComponent;
