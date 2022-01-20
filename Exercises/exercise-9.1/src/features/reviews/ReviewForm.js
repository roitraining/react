
import PropTypes from 'prop-types';
import { addReviewAsync } from './reviewSlice';
import { store } from '../../app/store';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';

function ReviewForm({ bookId, show, onHide }) {

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add a New Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            onHide();
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
</Modal.Body>
</Modal>
    )
}

ReviewForm.propTypes = {
    bookId: PropTypes.number.isRequired
};

export default ReviewForm;