import React from "react";
import { Section } from "./Styles/RecommendationStyles";
import { recommendationList } from "./Utils/langingPageUtil";
import CustomImage from "../../Common/CustomImage";

const Recommendation = () => {
  return (
    <Section>
      <div className="recommend_wrapper">
        <header className="rc_wp_header">
          <div>
            <h1>
              <strong>Lorem ipsum:</strong> <span>Lorem </span>
              ipsum dolor sit, <br /> amet consectetur adipisicing elit.
              Architecto eum repellat saepe
            </h1>
          </div>
          <div className="rc_wp_hd_highlight">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex
              architecto ab incidunt officiis, esse blanditiis, cumque sequi
              illo commodi modi. Error doloribus Lorem ipsum dolor sit.
            </p>
          </div>
        </header>

        <div className="rc_wp_recommendLists">
          {recommendationList?.map(({ id, name, image, desc }) => (
            <div key={id} className="rc_wp_rcl_card">
              <CustomImage
                src={image}
                alt={image}
                width={"100%"}
                height={250}
              />
              <header className="rc_wp_rcl_cd_header">
                <h3>{name}</h3>
              </header>

              <article className="rc_wp_rcl_cd_testimony">
                <q>{desc}</q>
              </article>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Recommendation;
