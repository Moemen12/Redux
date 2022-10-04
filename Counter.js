import { useDispatch, useSelector } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementByValue
} from "../actions/CounterAction";

export default function Counter() {
  const countState = useSelector((state) => state.count);
  //const {countState} = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleByValue = (vl) => {
    dispatch(incrementByValue(vl));
  };

  return (
    <div>
      <p>{countState}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button
        onClick={() => {
          handleByValue(3);
        }}
      >
        Increment by 5
      </button>
    </div>
  );
}
