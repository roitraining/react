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

export const receiveBooks = () => (dispatch) => {
    return api.fetchAllBooks().then((response) => {
        dispatch({
            type: actionTypes.LIST_BOOKS,
            response
        });
    })
}
