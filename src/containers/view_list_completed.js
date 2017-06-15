import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_all, complete_one, delete_one } from '../actions/actions_index';
import { Link } from 'react-router-dom';

class ViewListCompleted extends Component {

    componentDidMount() {
        console.log('this is our view list completed');
        this.props.fetch_all();
    }

    handleComplete(id) {
        this.props.complete_one(id).then(() => {
            this.props.fetch_all();
        });
    }

    handleDelete(id) {
        console.log('----ID of item to delete', id);
        this.props.delete_one(id).then(() => {
            this.props.fetch_all();
        });
    }

    render() {
        const completed = this.props.todos.filter( (item) => ( item.complete ));
        console.log('completed array ',completed);
        const listCompleted = completed.map( (item, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <i
                        className={`fa fa-${ (item.complete) ? 'check-' : ''  }square-o`}
                        aria-hidden="true"
                        onClick={ () => this.handleComplete(item._id) }></i>
                    <Link to={`/todo/${item._id}`}>{item.title}</Link>
                    <i
                        className="fa fa-times td-delete"
                        onClick={ () => this.handleDelete(item._id) }
                        aria-hidden="true"></i>
                </li>
            )
        });
        console.log('listcompleted', listCompleted);

        return (
            <div className="COMPLETED">
                <ul className="list-group">
                    { listCompleted }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.all
    };
}

export default connect(mapStateToProps, { fetch_all, complete_one, delete_one })(ViewListCompleted);