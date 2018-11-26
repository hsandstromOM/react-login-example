import { combineReducers } from 'redux';
// Reducers will be imported here
import reducer from './components/Login/LoginReducers'


const store = combineReducers({
  state: (state = {}) => state,
  // Reducers will be instantiated here
});

export default store;
