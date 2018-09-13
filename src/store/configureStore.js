import { createStore, combineReducers } from 'redux';
import yourCarReducer from '../reducers/yourCar';
import obstaclesReducer from '../reducers/obstacles';

export default () => {
  const store = createStore(combineReducers({
    yourCar: yourCarReducer,
    obstacles: obstaclesReducer
  }));

  return store;
};
