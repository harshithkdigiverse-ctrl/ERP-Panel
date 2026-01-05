import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMultiplePay: false,
};

const PosSlice = createSlice({
  name: "Pos",
  initialState,
  reducers: {
    setMultiplePay: (state) => {
      state.isMultiplePay = !state.isMultiplePay;
    },
  },
});

export const { setMultiplePay } = PosSlice.actions;
export default PosSlice.reducer;
