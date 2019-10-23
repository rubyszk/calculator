import React from 'react';
import Button from './components/Buttons';
import Result from './components/Result';
import './App.css';
const math = require('mathjs')


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

  clear = (nums) => {
    this.setState({result: ""})
  }

  equal = (nums) => {
    try {
      this.setState({result: eval(this.state.result)})
    } catch (err){
      if (err) {
        this.setState({result: 'error'})
      }
    }
  }

  componentDidMount() {
      document.addEventListener('keydown', this.keyDown.bind(this));
  }

  keyDown(props) {
    if (props.key === '1'|| props.key === '2' || props.key === '3'|| props.key === '4' || props.key === '5'|| props.key === '6'|| props.key === '7' || props.key === '8' || props.key === '9' || props.key === '0' || props.key === '+' || props.key === '-' || props.key === '*' || props.key === '/' ) {
      this.setState({result: this.state.result + props.key })
    } else if (props.key === 'c') {
      this.clear();
    } else if (props.key === 'Backspace') {
      this.setState({result: this.state.result.slice(0, -1)})
    } else if (props.key === 'Enter') {
      this.equal();
    }
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
          <Button handleClick={this.clear}>c</Button>
          <Button handleClick={this.calculate}>0</Button>
          <Button handleClick={this.equal}>=</Button>
          <Button handleClick={this.calculate}>+</Button>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
