
import {COUNTER_DECREMENT,COUNTER_INCREMENT} from '../actiontypes/index'



const start = 20

export const counter  = (counter = start, action) => {
    switch (action.type) {
      case COUNTER_INCREMENT:
        console.log(action.payload)
        return counter + 1;
      case COUNTER_DECREMENT:
        return counter - 1;
      default:
        return counter;
    }
  };



