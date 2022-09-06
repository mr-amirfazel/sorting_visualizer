import { createStore } from 'redux'

import * as types from './types';

const initialState = {size: 40}
const counterReducer = (state = initialState, action) => {

  if (action.type === types.ALTERSIZE) {
    return {
      size:  action.size,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;