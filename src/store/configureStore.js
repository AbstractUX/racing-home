import { createStore, combineReducers } from 'redux';
import yourCarReducer from '../reducers/yourCar';

export default () => {
  const store = createStore(combineReducers({
    yourCar: yourCarReducer
  }));

  return store;
};
