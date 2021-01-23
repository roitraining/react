import { combineReducers } from 'redux';
import {reviewsReducer as reviews} from './reviewsReducer';
import {booksReducer as books} from './booksReducer';

const bookStore = combineReducers({
    books,
    reviews
});

export default bookStore;
