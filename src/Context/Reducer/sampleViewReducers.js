import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: null,
  submitted: "",
};

const sampleViewSlice = createSlice({
  name: "sample-view",
  initialState: initialState,
  reducers: {
    setFormData: (state, actions) => {
      const { payload } = actions;
      return { ...state, formData: payload };
    },

    success: (state, actions) => {
      const { payload } = actions;
      console.log("state.form :>> ", payload);
      return { ...state, submitted: payload };
    },
  },
});

export const { setFormData, success } = sampleViewSlice.actions;

export default sampleViewSlice.reducer;
