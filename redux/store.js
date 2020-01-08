import { createStore } from 'redux';
import appReducer from './reducers/index';
// import postReducer from './reducers/post_reducer';

// const store = createStore(postReducer);
const store = createStore(appReducer);

export default store;