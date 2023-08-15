import React from "react";
import { Section } from "./Styles/Coaching";
import CustomButton from "../../Common/CustomButton";
import CustomVideoDisplayer from "../../Common/CustomVideoDisplayer";

const Coaching = () => {
  return (
    <Section>
      <div className="coaching_wrapper">
        <header className="coc_wp_header">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, maxime laborum quidem esse quia minima facilis.
          </h1>

          <div className="coc_wp_text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              cupiditate, consequuntur, officiis esse quo corrupti autem libero
              aspernatur vero impedit, exercitationem eos laudantium.
            </p>
          </div>
          <div className="coc_wp_btn_wrap">
            <CustomButton text={"start today with a free trial"} />
          </div>
        </header>

        <div className="coc_wp_video_wrap">
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
          <CustomVideoDisplayer height={"20em"} />
        </div>
      </div>
    </Section>
  );
};

export default Coaching;
