import React, { useState } from 'react';

// Define the BackgroundColorChangeWithAriaCurrentComponent component
const BackgroundColorChangeWithAriaCurrentComponent = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [selectedButton, setSelectedButton] = useState(null);

  // Function to change background color and text color
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    if (color === 'white') {
      setTextColor('black');
    } else {
      setTextColor('white');
    }
    setSelectedButton(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }}>
      {/* Dynamically setting aria-current attribute using a ternary operator inside the button tag */}
      <button
        style={{ backgroundColor: selectedButton === 'green' ? 'green' : 'initial' }}
        onClick={() => changeBackgroundColor('green')}
        {...(selectedButton === 'green' ? { 'aria-current': 'true' } : {})}
      >
        Green
      </button>
      <button
        style={{ backgroundColor: selectedButton === 'black' ? 'black' : 'initial' }}
        onClick={() => changeBackgroundColor('black')}
        {...(selectedButton === 'black' ? { 'aria-current': 'true' } : {})}
      >
        Black
      </button>
      <button
        style={{ backgroundColor: selectedButton === 'white' ? 'white' : 'initial' }}
        onClick={() => changeBackgroundColor('white')}
        {...(selectedButton === 'white' ? { 'aria-current': 'true' } : {})}
      >
        White
      </button>
      <button
        style={{ backgroundColor: selectedButton === 'red' ? 'red' : 'initial' }}
        onClick={() => changeBackgroundColor('red')}
        {...(selectedButton === 'red' ? { 'aria-current': 'true' } : {})}
      >
        Red
      </button>
      <button
        style={{ backgroundColor: selectedButton === 'blue' ? 'blue' : 'initial' }}
        onClick={() => changeBackgroundColor('blue')}
        {...(selectedButton === 'blue' ? { 'aria-current': 'true' } : {})}
      >
        Blue
      </button>
    </div>
  );
};

export default BackgroundColorChangeWithAriaCurrentComponent;

