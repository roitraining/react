import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import bookStore from './reducers';

const configureStore = () => {
    const middlewares = [ReduxThunk];
    let store = createStore(bookStore, applyMiddleware(...middlewares));
    return store;
}

export default configureStore;