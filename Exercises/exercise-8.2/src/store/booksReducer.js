
import { LIST_BOOKS, ADD_BOOK } from '../actions/actionTypes';

const books = [{
    title: "",
    author: "",
    conver: "",
    bookId: -1
}];

export const booksReducer = (state = books, action) => {
    switch (action.type) {
        case LIST_BOOKS:
            return action.response;
        case ADD_BOOK:
            return [
                action.response, ...state
            ];
        default:
            return state
    }
}