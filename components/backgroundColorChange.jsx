import React, { useState } from 'react';

// Define the ChangeBackgroundColorWithDynamicButtonColorComponent
const ChangeBackgroundColorWithDynamicButtonColorComponent = () => {
  
  // Initialize state variable to store the current background color
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState('white');

  // Initialize state variable to store the current text color
  const [currentTextColor, setCurrentTextColor] = useState('black');

  // Function to change the background color and text color
  const changeBackgroundAndTextColor = (backgroundColor, textColor) => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
    setCurrentBackgroundColor(backgroundColor);
    setCurrentTextColor(textColor);
  };

  return (
    <div>
      {/* Each button checks if it's the current background color and sets aria-selected accordingly */}
      
      {/* Button to change background to green */}
      <button 
        onClick={() => changeBackgroundAndTextColor('green', 'black')}
        style={{ backgroundColor: currentBackgroundColor === 'green' ? 'green' : '', color: currentTextColor }}
        aria-selected={currentBackgroundColor === 'green'}>
          Green
      </button>

      {/* Button to change background to black */}
      <button 
        onClick={() => changeBackgroundAndTextColor('black', 'white')}
        style={{ backgroundColor: currentBackgroundColor === 'black' ? 'black' : '', color: currentTextColor }}
        aria-selected={currentBackgroundColor === 'black'}>
          Black
      </button>

      {/* Button to change background to white */}
      <button 
        onClick={() => changeBackgroundAndTextColor('white', 'black')}
        style={{ backgroundColor: currentBackgroundColor === 'white' ? 'white' : '', color: currentTextColor }}
        aria-selected={currentBackgroundColor === 'white'}>
          White
      </button>

      {/* Button to change background to red */}
      <button 
        onClick={() => changeBackgroundAndTextColor('red', 'black')}
        style={{ backgroundColor: currentBackgroundColor === 'red' ? 'red' : '', color: currentTextColor }}
        aria-selected={currentBackgroundColor === 'red'}>
          Red
      </button>

      {/* Button to change background to blue */}
      <button 
        onClick={() => changeBackgroundAndTextColor('blue', 'black')}
        style={{ backgroundColor: currentBackgroundColor === 'blue' ? 'blue' : '', color: currentTextColor }}
        aria-selected={currentBackgroundColor === 'blue'}>
          Blue
      </button>
    </div>
  );
};

export default ChangeBackgroundColorWithDynamicButtonColorComponent;
