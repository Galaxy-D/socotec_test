import axios from 'axios';

const movieApi = axios.create({
    baseURL: 'http://localhost:8000/api/'
});

export default movieApi;