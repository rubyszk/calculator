import React from 'react';
import Button from './components/Buttons';
import Result from './components/Result';
import './App.css';
import * as math from 'mathjs';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
  }

  calculate = (nums) => {
    this.setState({result: this.state.result + nums })
  }
  
  render() {
  return (
    <div className="App">
      <Result result={this.state.result}/>
      <div className="calculator">
      <div className="row">
          <Button handleClick={this.calculate}>7</Button>
          <Button handleClick={this.calculate}>8</Button>
          <Button handleClick={this.calculate}>9</Button>
          <Button handleClick={this.calculate} >/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.calculate}>4</Button>
          <Button handleClick={this.calculate}>5</Button>
          <Button handleClick={this.calculate}>6</Button>
          <Button handleClick={this.calculate}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.calculate}>1</Button>
          <Button handleClick={this.calculate}>2</Button>
          <Button handleClick={this.calculate}>3</Button>
          <Button handleClick={this.calculate}>-</Button>
        </div>
        <div className="row">
          <Button handleClear={() => this.setState({ result : ""})}>c</Button>
          <Button handleClick={this.calculate}>0</Button>
          <Button>=</Button>
          <Button handleClick={this.calculate}>+</Button>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
