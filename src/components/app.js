import React from 'react';
import ViewAll from './view_all';
import AddForm from './add_form';
import ViewOne from './view_one';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const App = () => (
    <Router>
        <div className="container">
            <h1>To-do List</h1>
            <hr />
            <h4><Link className="btn btn-outline-success" to="add-todo">Add to-do item</Link></h4>

            <Route exact path="/" component={ViewAll} />
            <Route exact path="/add-todo" component={AddForm} />
            <Route exact path="/todo" component={ViewOne} />
        </div>
    </Router>
);

export default App;
