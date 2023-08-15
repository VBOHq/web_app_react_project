import { createSlice } from "@reduxjs/toolkit";
const sampleinitialState = {
  text: "i am a sample text",
};

const sampleSlice = createSlice({
  name: "samples",
  initialState: sampleinitialState,
  reducers: {
    sayHello: (state, action) => {
      console.log("state :>> ", state.text);
      console.log("action.payload :>> ", action);
    },
    displayText: (state, actions) => {
      // console.log("state :>> ", state.text);
      console.log("actions :>> ", actions);
    },
  },
});

export const { displayText, sayHello } = sampleSlice.actions;
export default sampleSlice.reducer;

// const dispatch = useDispatch();
// dispatch(sayHello("john"));
