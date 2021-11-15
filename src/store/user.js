import { createStore } from "redux";

const counterReducer = (state = { email: "" }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.email + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.email - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
