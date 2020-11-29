const { createSlice } = require("@reduxjs/toolkit");

const countSlice = createSlice({
  name: "aa",
  initialState: { count: 0 },
  reducers: {
    inc: (state, action) => {
      state.count += 1;
    },
  },
});

export default countSlice.reducer;
export const { inc } = countSlice.actions;
