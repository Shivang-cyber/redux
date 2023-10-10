import { ADD_OBJECT } from '../actions/objectAction';

const initialState = {
 objects: {},
};

const objectReducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_OBJECT:
   return {
    ...state,
    objects: {...state.objects, [action.payload.k]: [action.payload.v]},
   };
  default:
   return state;
 }
};

export default objectReducer;
