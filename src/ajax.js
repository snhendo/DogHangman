import axios from 'axios';

export function listDogBreeds(cb) {
  axios.get("https://dog.ceo/api/breeds/list/all").then(cb)
}

export function getImageForBreed(breed, cb) {
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(cb)
}