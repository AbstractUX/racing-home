const yourCarDefaultState = {
  currentLane: 0,
  miles: 0
};

export default (state = yourCarDefaultState, action) => {
  switch (action.type) {
    case 'SWITCH_TO_LANE':
      return {
        ...state,
        currentLane: action.lane
      };
    case 'ADD_MILE':
      return {
        ...state,
        miles: state.miles + 1
      };
    default:
      return state;
  }
};
