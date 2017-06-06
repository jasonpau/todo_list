import React, { Component } from 'react';
import todoData from './data/todo_data';
import { Link } from 'react-router-dom';

class ViewAll extends Component {
    render() {
        console.log('list data: ', todoData);
        const listElements = todoData.map((item, index) => {
            return (
                <li key={index} className="list-group-item">
                    <Link to="/todo">{item.title}</Link>
                </li>
            );
        });
        console.log('list elements' , listElements);
        return (
            <div>
                <h3>This will be a list</h3>
                <ul className="list-group">
                    {listElements}
                </ul>
            </div>
        )
    }
}

export default ViewAll;

