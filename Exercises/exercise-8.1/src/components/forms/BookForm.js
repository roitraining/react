import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';

const validate = values => {
    const errors = {};
    if(required(values.title, errors, 'title')) {
        size(values.title, errors, 'title', 3, 256);
    }
    if (required(values.author, errors, 'author')) {
        size(values.author, errors, 'author', 4, 100);  
    }
    return errors;
}

const required = (value, errors, prop) => {
    if (!value || value.trim() === '') {
        errors[prop] = 'Cannot be empty';
        return false;
    }
    return true;
}

const size = (value, errors, prop, min, max) => {
    if (value.length > max || value.length < min) {
        errors[prop] = `must be between ${min} and ${max} characters`;
    }
}

const BookForm = props => {
    const { handleSubmit } = props;

    return (<form className="form-group form-inline" onSubmit={handleSubmit}>
        <div className="row vertical-align">
            <div className="col-xs-3">
                <Field
                    component={RenderField}
                    name="title"
                    type="text"
                    controlId="title"
                    label="Title*" />
            </div>
            <div className="col-xs-3">
                <Field
                    component={RenderField}
                    name="author"
                    type="text"
                    controlId="author"
                    label="Author*" />
            </div>
            <button type="submit" className="btn btn-default btn-primary" >Submit</button>
        </div>
    </form>);
}

export default reduxForm({
    form: 'book',
    validate
})(BookForm);