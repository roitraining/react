import { combineReducers } from 'redux';
import {reviewsReducer as reviews} from './reviewsReducer';

const bookStore = combineReducers({
    reviews
});

export default bookStore;

