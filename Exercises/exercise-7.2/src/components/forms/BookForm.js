import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './RenderField';

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
    form: 'book'
})(BookForm);