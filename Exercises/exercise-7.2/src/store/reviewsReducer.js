import { LIST_REVIEWS } from '../actions/actionTypes';

const reviews = [{
    content: ""
}];

export const reviewsReducer = (state = reviews, action) => {
    switch (action.type) { 
        case LIST_REVIEWS:
            return action.response;
        default:
            return state
    }
}
