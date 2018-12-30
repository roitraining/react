import { connect } from 'react-redux';
import BookForm from '../components/forms/BookForm';
import { addBook } from '../actions';
import {formValueSelector} from  'redux-form';

const book = {
    author: '',
    cover: '',
    title: '',
    bookId: -1
}

const mapStateToProps = (state, ownProps) => {
    const selector = formValueSelector('book')
    return {
        initialValues: book,
        cover: selector(state, 'cover')
    }
};

const mapDispatchToProps = ({
    onSubmit: addBook
});

const BookFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookForm);

export default BookFormContainer;