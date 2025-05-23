React with Redux- counter and update name: using functional component

index.js:
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
----------------------------------------------------
App.js:
import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="App">
      <h2>React-Redux-Hooks Counter app</h2>
      <Counter />
    </div>
  );
}
-----------------------------------------------------
store/index.js:
import { createStore } from "redux";
import reducers from "../reducers";

const store = createStore(reducers); //reducer
console.log("store", store);
export default store;
----------------------------------------------------
reducers/index.js:
import { combineReducers } from "redux";
import counter from "./counter";

const reducers = combineReducers({
  counter
});

export default reducers;
-----------------------------------------------------
reducers/counter.js:
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_COUNTER,
  RESET,
  UPDATENAME
} from "../actions/counter";

const initialState = {
  count: 10,
  name: "priya"
};

const counter = (state = initialState, action) => { //initiate state and action
  switch (action.type) {
    case SET_COUNTER:
      return {
        ...state,
        count: action.payload
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        count: 0
      };
    case UPDATENAME:
      return {
        ...state,
        name: "Supriya"
      };
    default:
      return state;
  }
};

export default counter;
---------------------------------------------------------------------
action/counter.js:
export const SET_COUNTER = "SET_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET = "RESET";
export const UPDATENAME = "UPDATENAME";

export const setCounter = (counter) => ({
  type: SET_COUNTER,
  payload: counter
});

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const resetCounter = () => ({
  type: RESET
});

export const updateName = () => ({
  type: UPDATENAME
});
------------------------------------------------------------
Components/counter:
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
  updateName
} from "../actions/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.count); //updated state from store
  const name = useSelector((name) => name.counter.name); //reducername.state
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  const changeName = () => {
    dispatch(updateName());
  };
  return (
    <div>
      <h1>Count: {count}</h1>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <hr />
      <h1>Name : {name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Counter;