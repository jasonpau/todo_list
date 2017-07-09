import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_all, complete_one, delete_one } from '../actions/actions_index';
import ViewList from './view_list';

class ViewParent extends Component {

  componentDidMount() {
      //console.log('stuff stuff stuff ', this.props);
      this.props.fetch_all();
  }

  render() {
    const notComplete = this.props.todos.filter( (item, index) => ( !item.complete) );
    const completed = this.props.todos.filter( (item) => ( item.complete ));

    return (
      <div>
        <div className="td-not-complete">
          <ViewList
            items={notComplete}
            handleDelete={this.props.delete_one}
            handleComplete={this.props.complete_one}
          />
        </div>
        <div className="td-complete">
          <ViewList
            items={completed}
            handleDelete={this.props.delete_one}
            handleComplete={this.props.complete_one}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos.all
  };
}

export default connect(mapStateToProps, { fetch_all, complete_one, delete_one })(ViewParent);