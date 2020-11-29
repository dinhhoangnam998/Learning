import countReducer from "./redux";
const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: { countSlice: countReducer },
});
