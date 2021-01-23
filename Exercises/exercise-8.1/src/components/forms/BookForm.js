import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = (props) => (

    <Formik
        initialValues={{
            title: '',
            author: ''
        }}
        validate={values => {
            const errors = {};
            if (!values.title) {
                errors.title = 'Title Required';
            } else if (values.title.length < 3) {
                errors.title = 'Title must be at least 3 characters';
            }
            if (!values.author) {
                errors.author = 'Author Required';
            } else if (values.author.length < 3) {
                errors.author = 'Author must be at least 3 characters';
            }
            return errors;
        }}
        onSubmit={(values, { resetForm }) => {
            const book = {
                title: values.title,
                author: values.author,
                cover: '',
                bookId: -1
            }
            props.addBook(book).then(() => {
                resetForm();
            });
        }}
    >
        {({ isSubmitting }) => (
            <Form className="form-group form-inline">
                <label className="control-label">Title:
				<Field type="text" className="form-control" name="title" />
                </label>
                <label className="control-label">Author:
				<Field type="text" className="form-control" name="author" />
                </label>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Book</button>
                <ErrorMessage name="title" className="alert alert-danger" component="div" />
                <ErrorMessage className="alert alert-danger" name="author" component="div" />
            </Form>
        )}
    </Formik>
)

BookForm.propTypes = { addBook: PropTypes.func.isRequired };

export default BookForm;
