import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// Class based component
class App extends Component {
  // below only works when using extends Component (imported from react library)
  state = {
    persons: []
  }

  render() {
    return (
      <div className="App">
        <h1>Sup, I'm the Hornitos project</h1>
        <p>This is really working!</p>
        <button>Switch name</button>
        <Person name="Jacob" age="25"/>
        <Person name="Jacob" age="25">My hobby is djing</Person>
      </div>
    );
    //return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now'));
  }
}

export default App;
