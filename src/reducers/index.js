import {combineReducers} from 'redux';
import productsReducers from './products';
import productsStateReducers from './productstate';


const rootReducer = combineReducers ({
  
  AppReducer:productsStateReducers,
  filteredProducts:productsReducers
})
export default rootReducer