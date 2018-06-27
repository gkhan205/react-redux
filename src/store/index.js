import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counter';
import resultsReducer from './reducers/results';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

// Custom Middleware
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

// Other Middlewares
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    componseEnhancers(
        applyMiddleware(logger, thunk)
    )
);

export default store;