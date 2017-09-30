import React, { Component } from 'react';
import base from './img/base.png';
import head from './img/head.png';
import body from './img/body.png';
import right_leg from './img/right_leg.png';
import left_leg from './img/left_leg.png';
import right_arm from './img/right_arm.png';
import left_arm from './img/left_arm.png';
import dead from './img/dead.png';

function chooseImage(count){
  if (count === 0){return base}
  else if (count === 1){return head}
  else if (count === 2){return body}
  else if (count === 3){return right_leg}
  else if (count === 4){return left_leg}
  else if (count === 5){return right_arm}
  else if (count === 6){return left_arm}
  else {return dead}
}

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {wrongCount: 0};
    this.onWrong = this.onWrong.bind(this);
  }
  render() {
    return (
      <div className="Game">
       <h1>dog hangman</h1>
       <img style={{ height: '300px'}}  src={chooseImage(this.state.wrongCount)} onClick={ this.onWrong} />
      </div>
    );
  }
  onWrong(){
    this.setState({wrongCount: this.state.wrongCount + 1})
  }
}

export default Game;
