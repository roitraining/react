import { LIST_REVIEWS, ADD_REVIEW } from '../actions/actionTypes';

const reviews = [{
    content: ""
}];

export const reviewsReducer = (state = reviews, action) => {
    switch (action.type) { 
        case ADD_REVIEW:
        return [
            action.review, ...state
        ];
        case LIST_REVIEWS:
            return action.response;
        default:
            return state
    }
}
