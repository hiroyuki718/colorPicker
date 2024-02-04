import React, { useState } from 'react';
import './index.css';

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="App">
      <nav>
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </nav>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
}

export default App;
