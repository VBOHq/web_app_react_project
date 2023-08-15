import React from "react";
import { Section } from "./Styles/CommunityStyles";
import CustomButton from "../../Common/CustomButton";
import CustomImage from "../../Common/CustomImage";
import { gallery } from "./Utils/langingPageUtil";

const Community = () => {
  return (
    <Section>
      <div className="community_wrapper">
        <header className="com_wp_header">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ipsum.
          </h1>
          <div className="com_wp_text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, odio nulla alias fugit, et, assumenda magni amet
              excepturi soluta consectetur cupiditate eligendi fuga nostrum
              error eum nobis! Dolore, officiis corrupti.
            </p>
          </div>

          <div className="com_wp_btn_wrap">
            <CustomButton text={"get our system free trail"} />
          </div>
        </header>

        <div className="com_wp_img_wrap">
          {gallery
            .filter((val, i) => i < 3)
            .map((value, idx) => (
              <div key={idx}>
                <CustomImage src={value} />
              </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Community;
