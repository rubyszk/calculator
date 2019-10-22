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

  equal = () => {
    this.setState({result: eval(this.state.result)})
  }

  // keys = (key) => {

  //   const keydown = event => {
  //     if(event) {
  //       this.setState({result: this.state.result + nums })
  //     }
  //   }
  //    useEffect(() => {
  //      window.addEventListener("keydown", keydown)
  //      return() => {
  //        window.removeEventListener("keydown", keydown)
  //      }
  //    })
  // }

  

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
          <Button id="symbol" handleClick={this.calculate}>+</Button>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
