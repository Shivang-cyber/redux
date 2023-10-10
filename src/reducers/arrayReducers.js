
import { PUSH } from "../actions/arrayAction";
const initialState = {
  arr: [1,2,3],
};

const arrayReducer = (state = initialState, action) => {
 switch (action.type) {
   case PUSH:
   return {
    ...state, arr: [...state.arr,action.payload]
   };
  default:
   return state;
 }
};

export default arrayReducer;
