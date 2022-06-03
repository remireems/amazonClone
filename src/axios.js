import axios from 'axios'

const instance = axios.create({
  // API (cloud function) URL
  baseURL: 'https://us-central1-clone-bc0bd.cloudfunctions.net/api'
  // http://localhost:5001/clone-bc0bd/us-central1/api 
})

export default instance