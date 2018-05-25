import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder2.firebaseio.com/'
});

export default instance;