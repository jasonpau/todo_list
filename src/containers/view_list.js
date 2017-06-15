import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_all, complete_one, delete_one } from '../actions/actions_index';
import { Link } from 'react-router-dom';

class ViewList extends Component {

    componentDidMount() {
        //console.log('stuff stuff stuff ', this.props);
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
        const notComplete = this.props.todos.filter( (item, index) => ( !item.complete) );
        const listNotComplete = notComplete.map((item, index)=>{
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

        return (
            <div>
                <ul className="list-group ">
                    { listNotComplete }
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

export default connect(mapStateToProps, { fetch_all, complete_one, delete_one })(ViewList);