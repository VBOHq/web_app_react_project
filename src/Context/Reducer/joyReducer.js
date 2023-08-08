import { createSlice } from "@reduxjs/toolkit";
const sampleinitialState = {
  text: "i am a sample text",
};

const joySlice = createSlice({
  name: "joy",
  initialState: sampleinitialState,
  reducers: {
    sayHellos: (state, action) => {
      console.log("action.payload :>> ", action);
    },
    displayTexts: (state, actions) => {
      console.log("actions :>> ", actions);
    },
  },
});

export const { displayTexts, sayHellos } = joySlice.actions;
export default joySlice.reducer;

// const dispatch = useDispatch();
// dispatch(sayHello("john"));
