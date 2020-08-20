import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    showComponent: true
  }

  toggleShowComponent = () => {
    this.setState((prevState => {
      return {showComponent: !prevState.showComponent} 
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <button onClick={this.toggleShowComponent}>Toggle</button>
        {this.state.showComponent && <MyComponent data="component data"/>}
      </div>
    );
  }
}

export default App;
