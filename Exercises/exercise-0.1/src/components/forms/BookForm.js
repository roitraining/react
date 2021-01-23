import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import DropWrapper from '../common/DropWrapper';
import useHover from '../common/useHover';

const BookForm = (props) => {
    const [hoverRef, isHovering] = useHover();
    const [image, setImage] = useState(undefined);

    const hoverStyle = () => {
        return isHovering ? { opacity: '25%' } : { opacity: '100%' };
    };

    const handleImageChosen = (e) => {
        let size = 160;
        let newHeight;
        let newWidth;
        let files = e.target.files || e.dataTransfer.files;
        if (files && files.length > 0) {
            let f = files[0];
            let reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e2) {
                    let image = new Image();
                    image.onload = function () {
                        newHeight = this.height;
                        newWidth = this.width;
                        if (this.height > size) {
                            newHeight = size;
                            newWidth = (newHeight * this.width) / this.height;
                        }
                        if (newWidth > size) {
                            let oldWidth = newWidth;
                            newWidth = size;
                            newHeight = (newWidth * newHeight) / oldWidth;
                        }
                        let canvas = document.createElement("canvas");
                        let ctx = canvas.getContext("2d");
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        ctx.drawImage(image, 0, 0, newWidth, newHeight);
                        //your code here
                        setImage(canvas.toDataURL(f.type));

                    };
                    image.src = e2.target.result;
                };
            })(f);
            reader.readAsDataURL(f);
        }
    }

    return (
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
                    cover: image,
                    bookId: -1
                }
                props.addBook(book).then(() => {
                    resetForm();
                    setImage(undefined);
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
                    <DropWrapper dropped={handleImageChosen}>
                        <img src={image || './drop.png'} alt=""
                             ref={hoverRef} style={hoverStyle()}  />
                    </DropWrapper>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Add Book</button>
                    <ErrorMessage name="title" className="alert alert-danger" component="div" />
                    <ErrorMessage className="alert alert-danger" name="author" component="div" />
                </Form>
            )}
        </Formik>
    )
}

BookForm.propTypes = { addBook: PropTypes.func.isRequired };

export default BookForm;
