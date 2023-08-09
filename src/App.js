import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./View/Signup";
// import { displayText, sayHello } from "./Context/Reducer/sampleReducer";
// import { displayTexts, sayHellos } from "./Context/Reducer/joyReducer";
// import { useDispatch } from "react-redux";

const Text = () => {
  return <h2>my apps component</h2>;
};
const App = () => {
  // use cases
  // const dispatch = useDispatch();
  // dispatch(sayHello("john"));
  // dispatch(displayText("hellp"));
  // dispatch(sayHellos("miracle"));
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Text />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
