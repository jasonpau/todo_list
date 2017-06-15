import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/actions_index';

class ViewTodo extends Component {
    // constructor(props){
    //     super(props);
    //
    //
    //
    //     console.log('/////VIEW_TODO CONSTRUCTOR RAN!');
    // }
    componentDidMount() {
        console.log('ViewTodo props:', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
        console.log('=====RIGHT INSIDE VIEW_TODO COMPONENT DID Mount');

        // this.setState({
        //     stuffystuff: 'stuff',
        //     morestuff: this.props
        // });
    }

    handleComplete(id) {
        this.props.complete_one(id);
    }

    handleDelete(id) {
        this.props.delete_one(id).then(() => {
            this.props.history.push('/');
        });
    }

    toDateString(timestamp){
        return new Date(parseInt(timestamp)).toLocaleDateString();
    }

    toTimeString(timestamp){
        return new Date(parseInt(timestamp)).toLocaleTimeString();
    }

    render() {
        console.log('=====RIGHT INSIDE VIEW_TODO RENDER METHOD');
        console.log('single todo:', this.props.todo);
        const { todo } = this.props;
        console.log('=====RIGHT AFTER const { todo } = this.props');
        if (!todo) { return <h1>Loading...</h1> }
        return (
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-3">
                            <small>Owner: {todo.userId}</small>
                        </div>
                        <div className="col-sm-4">
                            <small>Created: {`${this.toDateString(todo.created)} ${this.toTimeString(todo.created)}`}</small>
                        </div>
                        <div className="col-sm-5">
                            <small>{(todo.complete) ? `Completed: ${this.toDateString(todo.completed)} ${this.toTimeString(todo.completed)}` : 'Incomplete'}</small>
                        </div>
                    </div>
                </div>
                <div className="card-block">
                    <div className="container">
                        <i
                            className={`fa fa-${ (todo.complete) ? 'check-' : ''  }square-o`}
                            aria-hidden="true"
                            onClick={ () => this.handleComplete(todo._id) }></i>
                        <h4 className="card-title">
                            {todo.title}</h4>
                    </div>
                    <p className="card-text">Details: {todo.details}</p>
                    <button
                        onClick={ () => this.handleDelete(todo._id) }
                        className="btn btn-danger">Delete</button>
                </div>
            </div>
        )
    }
}

function mapStateToPropsIgnoreFluffyBunnies(state) {
    console.log('=====RIGHT INSIDE VIEWTODO MAPTOSTATE FUNCTION');
    return {
        todo: state.todos.single
    }
}

console.log('=====RIGHT BEFORE VIEW_TODO CONNECT FUNCTION CALL');
export default connect(mapStateToPropsIgnoreFluffyBunnies, actions)(ViewTodo);
console.log('=====RIGHT AFTER VIEW_TODO CONNECT FUNCTION CALL');

// function connectAA(){
//
//     return function(ViewTodo){/** cool stuff done here with mapStateToPropsIgnoreFluffyBunnies and YOUR_ACTION_YOUR_CREATED */}
// }