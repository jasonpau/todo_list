import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ViewList extends Component {

    render() {
        const list = this.props.items.map((item, index)=>{
            return (
                <li className="list-group-item" key={index}>
                    <i
                        className={`fa fa-${ (item.complete) ? 'check-' : ''  }square-o`}
                        aria-hidden="true"
                        onClick={ () => this.props.handleComplete(item._id) } />
                    <Link to={`/todo/${item._id}`}>{item.title}</Link>
                    <i
                        className="fa fa-times td-delete"
                        onClick={ () => this.props.handleDelete(item._id) }
                        aria-hidden="true" />
                </li>
            )
        });

        return (
            <ul className="list-group ">
                { list }
            </ul>
        )
    }
}