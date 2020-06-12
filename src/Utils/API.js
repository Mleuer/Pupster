import axios from "axios";

const url = "https://dog.ceo/api/breeds/image/random";

function getDog() {
    return axios.get(url);
}

function getDogByBreed(breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
}

export default {
    getDog: getDog,
    getDogByBreed: getDogByBreed
}