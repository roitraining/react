import { createStore } from 'redux';
import bookStore from './reducers';

const configureStore = () => {
	let store = createStore(bookStore);
    return store;
}

export default configureStore;