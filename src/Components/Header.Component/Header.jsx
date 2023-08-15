import React from "react";
import { Container } from "./Styles/HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepublican } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Container>
      <div className="hd_wrapper">
        <div className="hd_wp_icon_wrap">
          <FontAwesomeIcon icon={faRepublican} className="hd_wp_iw_icon" />
          <small>icon text</small>
        </div>
        <div className="hd_wp_btn_wrap">
          <button>log in</button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
