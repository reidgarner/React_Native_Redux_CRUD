import { combineReducers } from 'redux';
import postReducer from './post_reducer';

const appReducer = combineReducers({
  postReducer,
});

// const rootReducer = (state, action) => {
//   if (action.type === 'LOGOUT') {
//     state = undefined;
//   }
//   return appReducer(state, action);
// };

// export default rootReducer;
export default appReducer;