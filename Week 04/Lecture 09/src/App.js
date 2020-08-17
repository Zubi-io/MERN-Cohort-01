import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:"Deb", age:32},
      {name:"Rahul", age:35},
      {name:"Avinash", age:26},
      {name:"Keshav", age:40}
    ],
    otherState: "Some other state"
  }

  nameChangeHandler = (newName) => {
    // this.state.persons[0].name = "Debchakra";
    this.setState({
      persons: [
        {name:newName, age:32},
        {name:"Rahul", age:35},
        {name:"Avinash", age:26},
        {name:"Keshav", age:40}
      ]
    })
  }

  updateNameHandler = (event) => {
    console.log(event)
    this.setState({persons: [
      {name:"Deb", age:32},
      {name:"Rahul", age:35},
      {name:event.target.value, age:26},
      {name:"Keshav", age:40}
    ]

    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Let's Start Reacting!!</h1>
        <button onClick={() => this.nameChangeHandler('Sunny')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
        />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} 
          click={this.nameChangeHandler}
          changed={this.updateNameHandler}
        />
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}
        />
        {/* {this.state.persons.map(item => {
          return (
            <Person name={item.name} age={item.age}/>
          )
        })} */}
        <p>{this.state.otherState}</p>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,"Let's Start Reacting!!"))
  }
}

export default App;
