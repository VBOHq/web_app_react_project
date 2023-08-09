import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
const SampleView = React.lazy(() => import("./View/SampleView/SampleView.js"));
const Loading = () => <p>Loading ...</p>;
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
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path={"/"} element={<Text />} />
          <Route path={"/sample"} element={<SampleView />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default App;
