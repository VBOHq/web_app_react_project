import React, { useRef } from "react";
import { Container, FormWraper, Wrapper } from "./Styles/ForgotPasswordStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImage from "./Assets/snowBg.png";
import {
  faLongArrowRight,
  faRepublican,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../Common/CustomButton";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef("");

  return (
    <Container>
      <Wrapper style={{ backgroundImage: `url(${bgImage})` }}>
        <aside className="ct_wp_aside">
          <header className="ct_wp_asd_header">
            <h1>
              it's a great day <br />
            </h1>
            <span>to grow!</span>
          </header>

          <nav className="ct_wp_asd_signup">
            <p>
              <small>Don't have an account? </small>
              <Link to={"/signup"} className="ct_wp_asd_sgnup_link">
                Sign up
                <FontAwesomeIcon
                  icon={faLongArrowRight}
                  color="var(--secondaryColor)"
                  className="ct_wp_asd_sgnup_icon"
                />
              </Link>
            </p>
          </nav>
        </aside>

        <FormWraper>
          <div className="fw_icon_wrap">
            <FontAwesomeIcon icon={faRepublican} className="fw_icon" />
            <small>icon text</small>
          </div>

          <header className="fw_wp_header">
            <h1>forgot your password?</h1>
            <p>
              Don’t worry, it happens. Just tell us your email address and we’ll
              send you a link to reset it.
            </p>
          </header>
          <form className="fw_wp_form">
            <label htmlFor="emal">Email address</label>
            <input
              type="email"
              placeholder="email@address.com"
              name="email"
              id="email"
              value={emailRef.current}
              onChange={(e) => (emailRef.current = e.target.value)}
            />

            <div className="fw_wp_btn_wrap">
              <CustomButton
                otherProps={{
                  onClick: (e) => {
                    e.preventDefault();
                    console.log("true", true);
                  },
                  className: "fw_wp_btn_wp_btn",
                }}
                text={
                  <small>
                    Send link
                    <span>
                      <FontAwesomeIcon
                        icon={faLongArrowRight}
                        className="btn_icon"
                      />
                    </span>
                  </small>
                }
              />
            </div>
          </form>
          <nav className="ct_wp_asd_signup">
            <p>
              <small>Don't have an account? </small>
              <Link to={"/signup"} className="ct_wp_asd_sgnup_link">
                Sign up
                <FontAwesomeIcon
                  icon={faLongArrowRight}
                  color="var(--secondaryColor)"
                  className="ct_wp_asd_sgnup_icon"
                />
              </Link>
            </p>
          </nav>
        </FormWraper>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
