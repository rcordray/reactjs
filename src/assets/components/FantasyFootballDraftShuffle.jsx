
import React, { useState, useEffect } from 'react';

// Define the DynamicInputShuffleWithModalComponent
const DynamicInputShuffleWithModalComponent = () => {
  const [inputCount, setInputCount] = useState(0);
  const [names, setNames] = useState([]);
  const [shuffledNames, setShuffledNames] = useState([]);
  const [newWindow, setNewWindow] = useState(null);

  // Function to handle input change
  const handleInputChange = (e, index) => {
    const newNames = [...names];
    newNames[index] = e.target.value;
    setNames(newNames);
  };

  // Function to shuffle the array of names
  const shuffleNames = () => {
    const shuffled = [...names];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledNames(shuffled);
  };

  // Function to open the modal in a new window
  const openModal = () => {
    const windowFeatures = 'width=400,height=400';
    const windowObjectReference = window.open('', '_blank', windowFeatures);
    setNewWindow(windowObjectReference);
  };

  // Function to close the modal window
  const closeModal = () => {
    if (newWindow) {
      newWindow.close();
      setNewWindow(null);
    }
  };

  useEffect(() => {
    if (newWindow) {
      newWindow.document.write(`
        <html>
          <body>
            <button onclick="window.opener.closeModal()">Close Modal</button>
            <input type="number" onchange="window.opener.setInputCount(event.target.value)" />
            <div id="inputs"></div>
            <button onclick="window.opener.shuffleNames()">Shuffle</button>
          </body>
        </html>
      `);

      for (let i = 0; i < inputCount; i++) {
        const inputElement = newWindow.document.createElement('input');
        inputElement.type = 'text';
        inputElement.style.display = 'block';
        inputElement.addEventListener('input', (e) => handleInputChange(e, i));
        newWindow.document.getElementById('inputs').appendChild(inputElement);
      }
    }
  }, [newWindow, inputCount]);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <table>
        <tbody>
          {shuffledNames.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicInputShuffleWithModalComponent;
