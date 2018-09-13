export default (state = 'in-progress', action) => {
  switch (action.type) {
    case 'END_GAME':
      return action.causeOfEndGame;
    default:
      return state;
  }
};
