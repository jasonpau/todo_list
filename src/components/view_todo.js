import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_one } from '../actions/index';

class ViewTodo extends Component {
    componentDidMount() {
        console.log('ViewTodo props:', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
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
                <p>Complete: {String(todo.complete)}</p>
                <button onClick={}>Complete</button>
                <p>
                    <small>Owner: {todo.userId}</small><br />
                    <small>Created: {todo.created}</small><br />
                    <small>Completed: {todo.completed}</small><br />
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

export default connect(mapStateToPropsIgnoreFluffyBunnies, { get_one })(ViewTodo);