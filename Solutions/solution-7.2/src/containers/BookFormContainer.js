import { connect } from 'react-redux';
import BookForm from '../components/forms/BookForm';
import { addBook } from '../actions';

const book = {
    author: '',
    cover: '',
    title: '',
    bookId: -1
}

const mapStateToProps = (state) => {
    return {
        initialValues: book,
    }
};

const mapDispatchToProps = ({
    onSubmit: addBook
});

const BookFormContainer = connect(mapStateToProps, mapDispatchToProps)(BookForm);

export default BookFormContainer;