export const bookReducer = (state = {title: '', author: '', cover: '',  bookId:-1}, action) => {
    switch (action.type) {                   
      case 'ADD_BOOK':
          return action.book
      default:
          return state
  }  
}
