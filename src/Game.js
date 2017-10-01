import React, { Component } from 'react';
import base from './img/base.png';
import head from './img/head.png';
import body from './img/body.png';
import right_leg from './img/right_leg.png';
import left_leg from './img/left_leg.png';
import right_arm from './img/right_arm.png';
import left_arm from './img/left_arm.png';
import dead from './img/dead.png';

// const this.props.breed = "sample this.props.breed";

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

function unique_char(word){
  if (word) {
    var str = word.replace(" ","")
    var uniql=""
    for (var x=0; x < str.length; x++){
      if (uniql.indexOf(str.charAt(x)) === -1){
        uniql += str[x] 
      }
    }
    return uniql
  }
  return '';
}

const BlankSpaces = ({ word, rightList }) => (<div>
  {word && word.split('').map((val, index) => (<span style={{ minWidth: '2px' }} key={index}>{rightList.find(v => v === val) ? val : ' ___ '}</span>))}
</div>)

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      wrongCount: 0, 
      wrongList: [],
      rightList: [],
      value: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className="Game">
       <img alt='hangman' style={{ height: '300px', display: 'inline-block'}}  src={chooseImage(this.state.wrongCount)}/>
       <div>
         <input type='text' value={this.state.value} style={{ borderWidth: '3px'}} onChange={event => this.onInputChange(event.target.value)} /> 
        </div>
        <BlankSpaces word={this.props.breed} rightList={this.state.rightList} />
        <div>
          {this.state.wrongList.map( (val, index) => <div style={{display: 'inline-block'}} key={index}>{val}</div>)}
        </div>
        <div>
          {this.state.wrongCount >= 7 ? <div style={{fontSize: '48px'}}>You Lost :( <div style={{fontSize: '24px'}}>Correct answer: {this.props.breed}</div></div> : <div/>}
          {this.state.rightList.length === unique_char(this.props.breed).length ? <div style={{fontSize: '48px'}}>You Win! :D</div> : <div/> }
          {console.log(this.state.wrongList, this.state.rightList)}
          </div>
      </div>
    );
  }

  onInputChange(letter){
    const wList = this.state.wrongList
    const rList = this.state.rightList
    const numUnique = unique_char(this.props.breed).length;
    if ((letter >= 'a' && letter <= 'z') || (letter >= 'A' && letter <= 'Z')){
      if (wList.length < 7 && rList.length < numUnique){
        if (!this.props.breed.includes(letter)){
          if (!wList.find((h) => h === letter)){
            wList.push(letter)
            this.setState({wrongCount: this.state.wrongCount + 1, wrongList: wList, value: ''})
          }
        }
        else {
          if(!rList.find((h) => h === letter)){
            rList.push(letter)
            this.setState({rightList: rList, value: ''})
          }
        }
      }
    }
  }
}

export default Game;
