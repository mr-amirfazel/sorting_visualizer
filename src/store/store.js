import { createStore } from 'redux'

import * as types from './types';

const initialState = {
    size: 40,
    sort: undefined,
    isSorting: false,
}
const counterReducer = (state = initialState, action) => {

  if (action.type === types.ALTERSIZE) {
    return {
      size:  action.size,
      sort: state.sort,
      isSorting: state.isSorting
    };
  }
  if (action.type === types.ALTERSORT) {
    return {
      size:  state.size,
      sort:  action.sort,
      isSorting: state.isSorting
    };
  }

  if (action.type === types.ALTERISSORTING) {
    return {
      size:  state.size,
      sort:  state.isSorting,
      isSorting: action.isSorting
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;