import * as TYPES from '../actions/types';


const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_DATA:
      return Object.assign({}, state, {
        articles: state.articles.concat({ data: "data" })
      });
  }
  return state;
};

export default rootReducer;