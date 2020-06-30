import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import Char from './Char/Char';

class App extends Component {
  state = {
    input: '',
    count: 0
  };

  inputChangeHandler = event => {
    this.setState({
      input: event.target.value
    })
    this.setState({
      count: this.state.input.length
    })
  }
  // deleteHandler = event 
  render(){
    let msg = '';
    if (this.state.count < 5){
      msg = (<p>'Text too short'</p>);
    } else if (this.state.count > 20) {
      msg = (<p>'Text too long'</p>);
    } else {
      msg = (<p>'Text Ok.'</p>);
    }
    let charList = this.state.input.split('').map(ch => {
      return <Char character={ch} />;
    })
    return (
      
      <div className="App">

        <Input changed={this.inputChangeHandler}/>
        {msg}
        {charList}
      </div>
    );
  }
}

export default App;
