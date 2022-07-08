import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  authReducer,
  appReducer,
  accountReducer,
  commonReducer,
} from '../reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  account: accountReducer,
  common: commonReducer,
});

const configureStore = () => {
  return createStore(
    rootReducer, /* preloadedState, */
    compose(applyMiddleware(thunkMiddleware)),
  );
};

export default configureStore;
