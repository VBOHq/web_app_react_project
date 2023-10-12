import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
const SampleView = React.lazy(() => import("./View/SampleView/SampleView.js"));
const SignupView = React.lazy(() => import("./View/SignupView/SignupView.js"));
const LoginView = React.lazy(() => import("./View/LoginView/LoginView.js"));

const ForgotPasswordView = React.lazy(() =>
  import("./View/ForgotPasswordView/ForgotPasswordView")
);
const LandingView = React.lazy(() =>
  import("./View/LandingView/LandingView.js")
);
const DashboardView = React.lazy(() =>
  import("./View/DashboardView/DashboardView.js")
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
          <Route path={"/signup"} element={<SignupView />} />
          <Route path={"/login"} element={<LoginView />} />
          <Route path={"/dashboard"} element={<DashboardView />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default App;
