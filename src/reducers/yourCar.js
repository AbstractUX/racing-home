const yourCarDefaultState = {
  currentLane: 0
};

export default (state = yourCarDefaultState, action) => {
  switch (action.type) {
    case 'SWITCH_TO_LANE':
      return {
        ...state,
        currentLane: action.lane
      };
    default:
      return state;
  }
};
