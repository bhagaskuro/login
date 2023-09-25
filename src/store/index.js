import { createStore } from "redux";

const initialState = {
  user: {
    username: "admin",
    password: "admin",
  },
};
function rootReducers(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

let store = createStore(rootReducers);

export default store;
