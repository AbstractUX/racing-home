import { createStore, combineReducers } from 'redux';
import yourCarReducer from '../reducers/yourCar';
import obstaclesReducer from '../reducers/obstacles';
import gameStateReducer from '../reducers/gameState';

export default () => {
  const store = createStore(combineReducers({
    yourCar: yourCarReducer,
    obstacles: obstaclesReducer,
    gameState: gameStateReducer
  }));

  return store;
};
