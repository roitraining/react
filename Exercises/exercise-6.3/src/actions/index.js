import * as api from '../api';
import * as actionTypes from './actionTypes';

export const receiveReviews = (bookId) => (dispatch) => {
    return api.fetchReviews(bookId).then((response) => {
        dispatch({
            type: actionTypes.LIST_REVIEWS,
            response
        });
    })
}

export const addReview = (review) => (dispatch) => {
    return api.addReview(review).then((response) => {
        dispatch({
            type: actionTypes.ADD_REVIEW,
            response
        });
    })
}
