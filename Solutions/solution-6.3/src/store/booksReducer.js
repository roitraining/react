import { LIST_BOOKS } from '../actions/actionTypes';

const books = [{ author: '', title: '', bookId: -1, cover: '' }];

export const booksReducer = (state = books, action) => {
    switch (action.type) {     
        case LIST_BOOKS:
            return action.response;
        default:
            return state
    }
}
