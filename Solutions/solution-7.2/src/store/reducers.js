import { combineReducers } from 'redux';
import {reviewsReducer as reviews} from './reviewsReducer';
import {booksReducer as books} from './booksReducer';
import { reducer  } from 'redux-form';

const bookStore = combineReducers({
    books,
    reviews,
    form: reducer
});

export default bookStore;

