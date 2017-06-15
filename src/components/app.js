import React from 'react';
import './app.css';
import ViewList from '../containers/view_list';
import ViewListCompleted from '../containers/view_list_completed';
import ViewTodo from '../containers/view_todo';
import AddForm from '../containers/add_form';
import Nav from './nav';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';

const App = () => (
    <Router>
        <div className="container">
            <br />
            <br />
            <h1 className="">To-do List</h1>
            <hr />
            <Route path="/" component={Nav} />
            <hr />
            <Route exact path="/" component={ViewList} />
            <br />
            <Route exact path="/" component={ViewListCompleted} />
            <Route path="/todo/:id" component={ViewTodo} />
            <Route exact path="/add-todo" component={AddForm} />
        </div>
    </Router>
);

export default App;