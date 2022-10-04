import { DECREMENT, INCREMENT, INC_BY_VAL } from "./Types";

export const incrementAction = () => {
  return {
    type: INCREMENT
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT
  };
};

export const incrementByValue = (vl) => {
  return {
    type: INC_BY_VAL,
    value: vl
  };
};
