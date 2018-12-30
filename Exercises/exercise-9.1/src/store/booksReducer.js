import { LIST_BOOKS, ADD_BOOK } from '../actions/actionTypes';

const books = [{ author: '', title: '', bookId: -1, cover: '' }];

export const booksReducer = (state = books, action) => {
    switch (action.type) {    
        case ADD_BOOK:
            return [
                action.book, ...state
            ];
        case LIST_BOOKS:
            return action.response;
        default:
            return state;
    }
}
