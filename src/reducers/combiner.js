import { combineReducers } from 'redux';
import stringReducer from './stringReducer';
import arrayReducer from './arrayReducers';
import obbjectReducer from './obbjectReducer';
const rootReducer = combineReducers({
 string: stringReducer,
 array: arrayReducer,
 object: obbjectReducer
});
export default rootReducer;
