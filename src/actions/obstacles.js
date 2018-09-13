export const createObstacle = (obstacle, lane) => ({
  type: 'CREATE_OBSTACLE',
  obstacle,
  lane
});

export const moveDown = () => ({
  type: 'MOVE_DOWN'
});

export const killLastGridPositionObstacles = () => ({
  type: 'KILL_LAST_GRID_POSITION_OBSTACLES'
});
