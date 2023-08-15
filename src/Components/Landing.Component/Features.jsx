import React from "react";
import { Section } from "./Styles/FeatureStyles";
import CustomButton from "../../Common/CustomButton";
import { features } from "./Utils/langingPageUtil";
import CustomImage from "../../Common/CustomImage";

const Features = () => {
  return (
    <Section>
      <div className="feature_wrapper">
        <header className="ft_wp_header">
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            nobis aut dolore? Lorem ipsum dolor sit
          </h1>
        </header>

        <article className="ft_wp_featLists">
          {features.map(({ title, media, step, text, btnText }) => {
            return (
              <div className="ft_wp_fLs_highlights" key={step}>
                <div className="ft_wp_fLs_hlt_left">
                  <header className="ft_wp_fLs_hlt_header">
                    <span>{step}.</span>
                    <h2>{title}</h2>
                  </header>

                  <div className="ft_wp_fLs_hlt_text">
                    <p>{text}</p>
                  </div>
                  <div className="ft_wp_fLs_hlt_btn_wrap">
                    <CustomButton text={btnText} />
                  </div>
                </div>
                <figure className="ft_wp_fLs_hlt_img">
                  <CustomImage src={media} alt={"picture description"} />
                </figure>
              </div>
            );
          })}
        </article>
      </div>
    </Section>
  );
};

export default Features;
