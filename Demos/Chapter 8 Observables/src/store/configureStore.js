import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import bookStore from './reducers';
import {searchEpic} from '../actions/searchEpic';
import { createEpicMiddleware } from 'redux-observable';

const configureStore = () => {
	const epicMiddleware = createEpicMiddleware(searchEpic);
    const middlewares = [ReduxThunk, epicMiddleware];
    let store = createStore(bookStore, applyMiddleware(...middlewares));
    return store;
}

export default configureStore;