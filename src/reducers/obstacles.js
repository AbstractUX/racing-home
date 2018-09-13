const obstaclesDefaultState = [];

export default (state = obstaclesDefaultState, action) => {
  switch (action.type) {
    case 'CREATE_OBSTACLE':
      return [...state, {obstacle: action.obstacle, lane: action.lane, gridPosition: -1 }];
    case 'MOVE_DOWN':
      const newState = state.map((obstacle) => {
        return {
          ...obstacle,
          gridPosition: obstacle.gridPosition + 1
        }
      });
      return newState;
    case 'KILL_LAST_GRID_POSITION_OBSTACLES':
      //TO DO
      return state;
    default:
      return state;
  }
};
