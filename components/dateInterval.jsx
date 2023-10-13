import React, { useState } from 'react';

// Define the DateIntervalCalculatorComponent
const DateIntervalCalculatorComponent = () => {
  
  // Initialize state variables to store two date inputs
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  
  // Initialize state variable to store the calculated interval
  const [dateInterval, setDateInterval] = useState(null);

  // Function to calculate the interval between two dates
  const calculateAndSetDateInterval = () => {
    // Convert string dates to Date objects
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);
    
    // Calculate the interval in days
    const calculatedInterval = Math.floor((endDateObject - startDateObject) / (1000 * 60 * 60 * 24));
    setDateInterval(calculatedInterval); // Update the state with the calculated interval
  };

  return (
    <div>
      {/* Input fields for start and end dates */}
      <div>
        <label>Start Date: </label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date: </label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>

      {/* Button to trigger the interval calculation */}
      <button onClick={calculateAndSetDateInterval}>Calculate Interval</button>

      {/* Display the calculated interval on the DOM */}
      {dateInterval !== null && <div>The interval between the dates is: {dateInterval} days</div>}
    </div>
  );
};

export default DateIntervalCalculatorComponent;
