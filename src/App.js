import React from 'react';
import Button from './components/Buttons';
import Result from './components/Result';
import Clear from './components/Clear'
import './App.css';
import * as math from 'mathjs';


function App() {
  return (
    <div className="App">
      <Result/>
      <div className="calculator">
        <Button/>
        <Clear/>
      </div>
    </div>
  );
}

export default App;
