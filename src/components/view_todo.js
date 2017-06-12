import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_one, complete_one } from '../actions/index';

class ViewTodo extends Component {
    componentDidMount() {
        console.log('ViewTodo props:', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
    }

    handleComplete(id) {
        this.props.complete_one(id);
    }


    toDateString(timestamp){
        return new Date(parseInt(timestamp)).toLocaleDateString();
    }

    toTimeString(timestamp){
        return new Date(parseInt(timestamp)).toLocaleTimeString();
    }

    render() {
        console.log('single todo:', this.props.todo);
        const { todo } = this.props;
        if (!todo) { return <h1>Loading...</h1> }
        return (
            <div>
                <Link to="/" className="btn btn-primary">Back to List</Link>
                <h1>Title: {todo.title}</h1>
                <p>{todo.details}</p>
                <p>Complete: { todo.complete ? 'yeppers!' : 'nope'  }</p>
                <button onClick={ () => this.handleComplete(todo._id) }>Complete</button>
                <p>
                    <small>Owner: {todo.userId}</small><br />
                    <small>Created: {`${this.toDateString(todo.created)} ${this.toTimeString(todo.created)}`}</small><br />
                    <small>Completed: {(todo.complete) ? `${this.toDateString(todo.completed)} ${this.toTimeString(todo.completed)}` : 'Incomplete'}</small><br />
                </p>
            </div>
        )
    }
}

function mapStateToPropsIgnoreFluffyBunnies(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToPropsIgnoreFluffyBunnies, { get_one, complete_one })(ViewTodo);

// function connectAA(){
//
//     return function(ViewTodo){/** cool stuff done here with mapStateToPropsIgnoreFluffyBunnies and YOUR_ACTION_YOUR_CREATED */}
// }