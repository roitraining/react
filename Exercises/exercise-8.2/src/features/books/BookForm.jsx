import { store } from '../../app/store';
import { addBookAsync } from './bookSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';


function BookForm({show, onHide}) {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          Add a New Book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik onSubmit={(values, { resetForm }) => {
          store.dispatch(addBookAsync({
            title: values.title,
            author: values.author
          }));
          resetForm();
          onHide();
        }}
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
        >
          {({ isSubmitting }) => (
            <Form className="form-group form-inline">
              <label className="control-label">Title:
                <Field type="text" className="form-control"
                  name="title" />
              </label>
              <label className="control-label">Author:
                <Field type="text" className="form-control"
                  name="author" />
              </label>
              <button disabled={isSubmitting} type="submit" className="btn btn-primary">
                Add Book</button>
              <ErrorMessage name="title" className="alert alert-danger" component="div" />
              <ErrorMessage className="alert alert-danger" name="author" component="div" />
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>

  );
}

export default BookForm;