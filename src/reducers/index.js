import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    form: formReducer
});

console.log('=====RIGHT BEFORE ROOT REDUCER');
export default rootReducer;