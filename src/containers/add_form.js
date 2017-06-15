import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_todo } from '../actions/actions_index';

class AddForm extends Component {

    onFormSubmit(vals) {
        console.log('Form submitted: ', vals);
        this.props.add_todo(vals).then(() => {
            //console.log('Ready to redirect. Props:', this.props);
            this.props.history.push('/');
        });
    }

    render () {
        const { handleSubmit } = this.props;
        console.log('add form this.props right inside render function', this.props);
        return (
            <div>
                <h4>Add a To-do Item</h4>
                <div className="">
                    <form onSubmit={handleSubmit( (values)=>{ this.onFormSubmit(values) } )}>
                        <div className="form-group">
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                className="form-control"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                name="details"
                                component="input"
                                type="text"
                                className="form-control"
                                placeholder="Details"
                            />
                        </div>
                        <button className="btn btn-primary">Add To-do</button>
                    </form>
                </div>
            </div>
        )
    }
}

AddForm = reduxForm({
    form: 'add-form'
})(AddForm);

export default connect(null, { add_todo })(AddForm);