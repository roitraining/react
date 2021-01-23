import {connect} from 'react-redux';
import BookList from '../components/books/BookList';
import { receiveBooks } from '../actions';

const mapStateToProps = (state) => ({
    books : state.books
});

const mapDispatchToProps = {
    receiveBooks
};

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListContainer;
