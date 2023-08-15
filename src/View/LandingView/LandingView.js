import React from "react";
import LandingPage from "../../Components/Landing.Component/LandingPage";
import Header from "../../Components/Header.Component/Header";
import { Container } from "./Styles";

const LandingView = () => {
  return (
    <Container>
      <Header />
      <LandingPage />
    </Container>
  );
};

export default LandingView;
