import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';    //works as a middleware
import thunk from 'redux-thunk'
import { getProductsReducer } from './reducers/productReducers';


const middleware = [thunk]

const reducer = combineReducers({
    getProducts : getProductsReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store