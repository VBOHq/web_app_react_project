import React from "react";
import { Section } from "./Styles/GuidelinesStyles";
import CustomVideoDisplayer from "../../Common/CustomVideoDisplayer";
import CustomButton from "../../Common/CustomButton";

const GuideLine = () => {
  return (
    <Section>
      <div className="sec_wrapper">
        <aside className="sec_wp_content">
          <header className="sec_wp_ct_header">
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ab
              quam deleniti repudiandae voluptatibus! Magni, dignissimos
              commodi.
            </h2>
          </header>

          <article className="sec_wp_ct_lists">
            <ul>
              <li>
                <strong>3000 achievers</strong> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Est minus quod ipsum velit
                debitis? Odio velit illum aperiam quas voluptatem sit, ducimus
                doloribus voluptates. Labore, sunt a.
              </li>
              <li>
                <strong>LIVE weekly classes</strong> Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Est minus quod ipsum velit
                debitis? Odio velit illum aperiam quas voluptatem sit, ducimus
                doloribus voluptates. Labore, sunt a.
              </li>
              <li>
                <strong>
                  Free 14-day trial and $300 habit course UNLOCKED NOW!
                </strong>{" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                minus quod ipsum velit debitis? Odio velit illum aperiam quas
                voluptatem sit,
              </li>
            </ul>
          </article>

          <div className="sec_wp_ct_btn_wrap">
            <CustomButton
              text={
                <span>
                  start <small>a</small> free trial
                </span>
              }
            />
          </div>
        </aside>
        <article className="sec_wp_video">
          <CustomVideoDisplayer height={"22em"} slidePosition={"SlideInUp"} />
        </article>
      </div>
    </Section>
  );
};

export default GuideLine;
