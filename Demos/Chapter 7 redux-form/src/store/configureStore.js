import { createStore, applyMiddleware  } from 'redux';
import bookStore from './reducers';
import ReduxThunk from 'redux-thunk';

const configureStore = () => {
   const middlewares = [ReduxThunk];
	let store = createStore(bookStore,
      applyMiddleware(...middlewares)
);
   return store;
}

export default configureStore;
