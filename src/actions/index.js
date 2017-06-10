import { FETCH_ALL, GET_ONE } from './types';
import axios from 'axios';

const BASE_URL = 'http://api.scottbowlerdev.com';
const API_KEY = '?key=c417jasonpau';

export function fetch_all() {
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);

    // the action returned is an OBJECT that returns a string of the type, and a payload
    return {
        type: FETCH_ALL,
        payload: request
    };
}

export function get_one(id) {
    const request = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: GET_ONE,
        payload: request
    };
}

export function complete_one(id) {
    const request = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: COMPLETE_ONE,
        payload: request
    };
}