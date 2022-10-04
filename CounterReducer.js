import { INCREMENT } from "../actions/Types";
import { DECREMENT } from "../actions/Types";
import { INC_BY_VAL } from "../actions/Types";

function CounterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INC_BY_VAL:
      return { ...state, count: state.count + action.value };
    default:
      return state;
  }
}
export default CounterReducer;
