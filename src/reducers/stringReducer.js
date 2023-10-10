import { ADD_STRING } from "../actions/stringAction";
const initialState = {q:'amnf', source:"auto",target:"auto"};

const stringReducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_STRING:
   return {...state, 
    q: action.payload.q, 
    source: action.payload.source, 
    target:action.payload.target};
  default:
   return state;
 }
};

export default stringReducer;
