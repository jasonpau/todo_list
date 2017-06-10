import React from 'react';
import './app.css';
import ViewList from './view_list';
import ViewTodo from './view_todo';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

const App = () => (
    <Router>
        <div className="container">
            <h1 className="">To-do List</h1>
            <Route exact path="/" component={ViewList} />
            <Route path="/todo/:id" component={ViewTodo} />
        </div>
    </Router>
);

export default App;
