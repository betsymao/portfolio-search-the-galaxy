// libraries
import axios from 'axios';

// config
import config from '../config/config.json';

// connect to API
export function getItems(query) {

    // GET request
    return axios.get(`${config.NASARootURL}search?q=${query}&page_size=10`);

}