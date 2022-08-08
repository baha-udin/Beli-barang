import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// create store for save state data in global
const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
