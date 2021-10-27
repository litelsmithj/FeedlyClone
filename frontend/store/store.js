import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
};

export default configureStore;