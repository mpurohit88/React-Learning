import * as TYPES from './types';

export const clear = () => {
  return {
    type: TYPES.FETCH_LOADING,
  };
};

export const getData = () => async dispatch => {
  // const res = await api.get('/data');
  const res = { data: 'data' };
  dispatch({
    type: TYPES.GET_DATA,
    payload: res.data,
  });
};