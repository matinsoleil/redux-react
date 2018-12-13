
import { COUNTER_DECREMENT,COUNTER_INCREMENT } from '../actiontypes/index'

export const incrementCounter = (message) => ({
    type: COUNTER_INCREMENT,
    payload: message
  });
  export const decrementCounter = (message) => ({
    type: COUNTER_DECREMENT,
    payload: message
  });


