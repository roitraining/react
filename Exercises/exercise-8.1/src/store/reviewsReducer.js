
import { LIST_REVIEWS, ADD_REVIEW } from '../actions/actionTypes';

const reviews = [{
    content: "",
    bookId: -1
}];

export const reviewsReducer = (state = reviews, action) => {
    switch (action.type) {
        case LIST_REVIEWS:
            return action.response;
        case ADD_REVIEW:
            return [
                action.response, ...state
            ];
        default:
            return state
    }
}