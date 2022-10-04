import { createStore } from "redux";
import CounterReducer from "../reducers/CounterReducer";

const store = createStore(CounterReducer);

export default store;
