import axios from 'axios';

const instance = axios.create({
    // deployed API endpoint
    baseURL: 'https://react-amazon-api.herokuapp.com/'
    // local API endpoint  http://localhost:5001/unofficial-a6378/us-central1/api
})

export default instance;