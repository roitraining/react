
import PropTypes from 'prop-types';
import { addReviewAsync } from './reviewSlice';
import { store } from '../../app/store';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function ReviewForm({ bookId}) {

    return (
        <Formik
        initialValues={{
            content: ''
        }}
        validate={values => {
            const errors = {};
            if (!values.content) {
                errors.content = 'Review cannot be empty';
            } else if (values.content.length < 5) {
                errors.content = 'Review must be at least 5 characters';
            }
            return errors;
        }}
        onSubmit={(values, { resetForm }) => {
            store.dispatch(addReviewAsync({content: values.content, bookId}));
            resetForm();
        }}
    >
        {({ isSubmitting }) => (
            <Form className="form-group form-inline">
                <label className="control-label">Review:
                    <Field type="text" className="form-control" name="content" as="textarea" />
                </label>
                <br />
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Review</button>
                <ErrorMessage name="content" className="alert alert-danger" component="div" />
            </Form>
        )}
    </Formik>
    )
}

ReviewForm.propTypes = {
    bookId: PropTypes.number.isRequired
};

export default ReviewForm;