import axios from 'axios'

const instance = axios.create({
  // API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-bc0bd/us-central1/api' // need to replace url with deployed url
})

export default instance