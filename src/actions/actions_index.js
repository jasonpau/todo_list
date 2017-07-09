import {
    FETCH_ALL,
    GET_ONE,
    COMPLETE_ONE,
    DELETE_ONE,
    ADD_TODO
} from './types';
import axios from 'axios';

const BASE_URL = 'http://api.scottbowlerdev.com';
const API_KEY = '?key=c417jasonpau';

export function fetch_all() {
    console.log('=====RIGHT INSIDE fetch_all ACTION FUNCTION');
    const request = axios.get(`${BASE_URL}/todos${API_KEY}`);

    // the action returned is an OBJECT that returns a string of the type, and a payload
    return {
        type: FETCH_ALL,
        payload: request
    };
}

export function get_one(id) {
    console.log('=====RIGHT INSIDE get_one ACTION FUNCTION');
    const request = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return {
        type: GET_ONE,
        payload: request
    };
}

export function complete_one(id) {
    return function(dispatch, getState) {
      console.log('=====RIGHT INSIDE complete_one ACTION FUNCTION');
      const request = axios.put(`${BASE_URL}/todos/${id + API_KEY}`);

      dispatch({
          type: COMPLETE_ONE,
          payload: request
      }).then( () => { dispatch(fetch_all()) });
    };
}

export function delete_one(id) {
    console.log('=====RIGHT INSIDE DELETE_ONE ACTION FUNCTION');
    const request = axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

    return function(dispatch, getState) {
      dispatch({
        type: DELETE_ONE,
        payload: request
      }).then( () => { dispatch(fetch_all()) });
    }
}

export function add_todo(item) {
    console.log('=====RIGHT INSIDE ADD_TODO ACTION FUNCTION');

    const request = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: ADD_TODO,
        payload: request
    };
}