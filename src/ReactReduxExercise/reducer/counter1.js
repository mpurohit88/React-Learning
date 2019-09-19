import * as actionType from '../actionType.js';

const intialize = { count: 10 }

const counter1 = function (state = intialize, action) {
  switch (action.type) {
    case actionType.INCREMENT:
      return { count: state.count + 1 };

    case actionType.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export default counter1;