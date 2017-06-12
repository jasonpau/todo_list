import { FETCH_ALL, GET_ONE, COMPLETE_ONE } from '../actions/types';

const DEFAULT_STATE = { all: [], single: null };

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case FETCH_ALL:
            console.log('Todo reducer FETCH_ALL:', action.payload.data.todos);
            console.log('state:',state);
            console.log('state, but using spread operator:',...state);
            return {
                ...state, all: action.payload.data.todos
            };
        case GET_ONE:
            console.log('Todo reducer GET_ONE:', action.payload.data.todo);
            return { ...state, single: action.payload.data.todo };
        case COMPLETE_ONE:
            console.log('Todo reducer COMPLETE ONE:', action.payload.data.todo);
            return { ...state, single: action.payload.data.todo };
        default:
            return state;
    }
}