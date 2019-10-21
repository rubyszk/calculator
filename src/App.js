import React from 'react';
import Button from './components/Buttons';
import Result from './components/Result';
import './App.css';
import * as math from 'mathjs';


function App() {
  return (
    <div className="App">
      <Result/>
      <div className="calculator">
      <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>x</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>/+</Button>
        </div>
        <div className="row">
          <Button>c</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>-</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
