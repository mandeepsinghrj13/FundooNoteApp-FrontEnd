import { createStore } from "redux";

const counterReducer = (state = { email: "", sendEmail: true }, action) => {
  if (action.type === "Email") {
    return {
      email: state.email + 1,
      sendEmail: state.email,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
