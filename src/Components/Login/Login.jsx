import React, { useRef } from "react";
import { Container, FormWrapper, ButtonWrapper } from "./Styles/LoginStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepublican } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = () => {
    const data = {
      email: email.current,
      password: password.current,
    };
  };

  return (
    <Container>
      <div className="ct_wrapper">
        <div className="right">
          <div className="ct_form_wrapper">
            <div className="ct_wp_header">
              <div className="logo-wrapper">
                <FontAwesomeIcon icon={faRepublican} className="hd_wp_iw_icon" />
                <small>icon text</small>
              </div>
              <h2>Log into your account</h2>
            </div>
            <FormWrapper>
              <form>
                <div className="ct_fm_input_wrap">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    inputMode="email"
                    name="email"
                    placeholder="email@address.com"
                    className="ct_fm_input"
                    id="email"
                    onChange={(e) => (email.current = e.target.value)}
                  />
                </div>
                <div className="ct_fm_input_wrap">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    inputMode="password"
                    name="password"
                    placeholder="Choose a unique password"
                    className="ct_fm_input"
                    id="password"
                    onChange={(e) => (password.current = e.target.value)}
                  />
                </div>
              </form>

              <ButtonWrapper>
                <button onClick={() => handleSubmit()}>Login</button>
              </ButtonWrapper>

              <div className="password">
                <Link className="password">I need help with my password</Link>
              </div>
            </FormWrapper>
          </div>
        </div>
        <div className="left">
          <div className="content-wrapper">
            <h4 className="free-trial">It's a great day</h4>
            <img src="/assets/grow.svg" alt="" />

            <p>
              <span className="account">Don´t have an account?</span>
              <Link className="signup">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
