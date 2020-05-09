import { combineReducers } from 'redux';
import { COUNTER_CHANGE } from '../actions/testaction'


const INITIAL_STATE = {
  counter: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
        return {counter: state.counter + 1}
    default:
      return state
  }

}