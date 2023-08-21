import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

const ForgotPasswordView = React.lazy(() =>
  import("./View/ForgotPasswordView/ForgotPasswordView")
);
const SampleView = React.lazy(() => import("./View/SampleView/SampleView.js"));
const LandingView = React.lazy(() =>
  import("./View/LandingView/LandingView.js")
);

const Loading = () => <p>Loading ...</p>;

const App = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path={"/"} element={<LandingView />} />
          <Route path={"/home"} element={<LandingView />} />
          <Route path={"/sample"} element={<SampleView />} />
          <Route path={"/forgot_password"} element={<ForgotPasswordView />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default App;
