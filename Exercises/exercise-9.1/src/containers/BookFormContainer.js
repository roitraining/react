import {connect} from 'react-redux';
import BookForm from '../components/forms/BookForm';
import { addBook } from '../actions';


const mapDispatchToProps = {
    addBook
};

const BookFormContainer = connect(null, mapDispatchToProps)(BookForm);

export default BookFormContainer;
