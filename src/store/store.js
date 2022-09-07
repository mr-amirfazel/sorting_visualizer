import { createStore } from 'redux'

import * as types from './types';

const initialState = {
    size: 40,
    sort: undefined,
    isSorting: false,
    array:undefined,
    setArray: undefined,
}
const counterReducer = (state = initialState, action) => {

  if (action.type === types.ALTERSIZE) {
    return {
      size:  action.size,
      sort: state.sort,
      isSorting: state.isSorting,
      setArray:state.setArray,
      array: state.array
    };
  }
  if (action.type === types.ALTERSORT) {
    return {
      size:  state.size,
      sort:  action.sort,
      isSorting: state.isSorting,
      setArray:state.setArray,
      array: state.array
    };
  }

  if (action.type === types.ALTERISSORTING) {
    return {
      size:  state.size,
      sort:  state.sort,
      isSorting: action.isSorting,
      setArray:state.setArray,
      array: state.array
    };
  }

  if (action.type === types.ALTERSORTREQUIRED){
    return {
      size:  state.size,
      sort:  state.sort,
      isSorting: state.isSorting,
      setArray: action.setArray,
      array:action.array,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;