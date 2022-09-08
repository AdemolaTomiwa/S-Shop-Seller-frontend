import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import {
   changeLoginReducer,
   loginReducer,
   registerReducer,
   updateReducer,
} from './reducers/userReducers';
import errorReducer from './reducers/errorReducers';
import {
   createProductReducer,
   getProductsReducer,
} from './reducers/productReducers';

// All reduers
const reducer = combineReducers({
   error: errorReducer,
   login: loginReducer,
   register: registerReducer,
   update: updateReducer,
   changeLogin: changeLoginReducer,
   getProducts: getProductsReducer,
   createProduct: createProductReducer,
});

const userData =
   typeof window !== 'undefined' && localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;

const userToken =
   typeof window !== 'undefined' && localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : null;

// initial states here
const initalState = {
   login: { user: userData, token: userToken },
   register: { user: userData, token: userToken },
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
   reducer,
   initalState,
   composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
