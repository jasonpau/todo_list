import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        //console.log(this.props.location.pathname);
        return (
            <nav>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={`nav-link ${(this.props.location.pathname === '/') ? 'active' : ''}`}>List</Link>
                    </li>
                    {console.log('cl inside nav render returned jsx',this.props.location.pathname)}
                    <li>
                        <Link
                            to="/add-todo"
                            className={`nav-link ${(this.props.location.pathname === '/add-todo') ? 'active' : ''}`}>Add</Link>
                    </li>
                    <li>
                        <a href="https://www.google.com" className="nav-link">Google&reg;</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;