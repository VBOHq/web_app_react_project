import React from "react";
import { Link } from "react-router-dom";
import { Section } from "./Styles/Footer";

const Footer = () => {
  return (
    <Section>
      <p>copyright 2023 webapp. All right reserved</p>
      <p>
        <Link to={"/"}>privacy</Link> and <Link to={"/"}>term of use</Link>
      </p>
    </Section>
  );
};

export default Footer;
