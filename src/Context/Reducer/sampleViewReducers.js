import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: null,
};

const sampleViewSlice = createSlice({
  name: "sample-view",
  initialState,
  reducers: {
    setFormData: (state, actions) => {
      const { payload } = actions;
      return { ...state, formData: payload };
    },
  },
});

export const { setFormData } = sampleViewSlice.actions;

export default sampleViewSlice.reducer;
