import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import bookStore from './reducers';

const configureStore = () => {
   const middlewares = [ReduxThunk];
   let store = createStore(bookStore,
					  applyMiddleware(...middlewares));
   return store;
}


export default configureStore;
