import React, { Component } from 'react';
import Game from './Game';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
       <h1>Guess That Dog!</h1>
       <Game/>
      </div>
    );
  }
}

export default App;
