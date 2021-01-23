import { Field, reduxForm } from 'redux-form';
import RenderTextArea from './RenderTextArea';

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
    return <form onSubmit={handleSubmit} className="form-group form-inline">
                <Field
                    name="content"
                    controlId="content"
                    type="text*"
                    component={RenderTextArea}
                    label="Review*" />
            <button type="submit" className="btn btn-default btn-primary" >Submit</button>

    </form>;

}

export default reduxForm({
    form: 'review',
    validate
})(reviewForm);
