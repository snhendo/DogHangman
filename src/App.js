import React, { Component } from 'react';
import Game from './Game';
import { listDogBreeds, getImageForBreed } from './ajax';


const DogBreeds = ({ breeds, images, onGetImage }) => (
  <div>
    {images != null ? <img alt="loading your dogs" src={images} style={{display: 'inline-block'}}/> : <div />} 
    {}
  </div>
) 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breedList: null,
      breedChosen: null,
      dogImage: null
    }

    this.onListBreeds = this.onListBreeds.bind(this)
    this.onGetImage = this.onGetImage.bind(this)
  }

  onGetImage(response) {
    this.setState({ dogImage: response.data.message })
  }

  onListBreeds(response) {
    console.log("called")
    const breeds = Object.keys(response.data.message)
    const theBreed = breeds[Math.floor(Math.random() * breeds.length)]
  
    getImageForBreed(theBreed, this.onGetImage)
    this.setState({ breeds: Object.keys(response.data.message), breed: theBreed })
  }

  componentDidMount() {
    listDogBreeds(this.onListBreeds)
  }
  
  render() {
    return (
      <div className="App">
       <h1>Guess That Dog!</h1>
       <Game breed={this.state.breed} />
       <DogBreeds breeds={this.state.breeds} images={this.state.dogImage} />
      </div>
    );
  }
}

export default App;
