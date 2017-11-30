import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';

const validate = values => {
    const errors = {};

    if (!values.content || values.content.trim() === '') {
        errors.content = 'Enter a review';
    }
    else if (values.content.length > 256 || values.content.length < 3) {
        errors.content = 'Review must be between 3 and 256 characters';
    }

    return errors;
}

const reviewForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
        <div className="row vertical-align">
            <div className="col-xs-3">
                <Field
                    name="content"
                    controlId="content"
                    type="text*"
                    component={RenderField}
                    label="Review*" />
            </div>
            <button type="submit" className="btn btn-default btn-primary" >Submit</button>
        </div>
    </form>;

}

export default reduxForm({
    form: 'review',
    validate
})(reviewForm);
