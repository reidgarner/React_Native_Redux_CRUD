import { createStore } from 'redux';
import appReducer from './reducers/index';
import postReducer from './reducers/postReducer';
import App from './App';
import { Provider } from 'react-redux';

const store = createStore(appReducer);
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));

export default store;