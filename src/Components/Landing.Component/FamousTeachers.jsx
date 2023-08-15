import React from "react";
import CustomVideoDisplayer from "../../Common/CustomVideoDisplayer";
import { Section } from "./Styles/FamousTeacherStyles";

const FamousTeachers = () => {
  return (
    <Section>
      <div className="famous_wrapper">
        <header className="fm_wp_header">
          <h1>What famous Developers say...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            dignissimos culpa optio vero, mollitia obcaecati, voluptas non
            repellendus corporis nulla accusamus. Perspiciatis molestiae
            accusamus excepturi quibusdam dolore!
          </p>
        </header>

        <article className="fm_wp_video_wrap">
          <div className={"fm_wp_vd_wp_video_wrap"}>
            <CustomVideoDisplayer
              className={"fm_wp_vd_wp_video"}
              height={"22em"}
            />
          </div>
          <div className={"fm_wp_vd_wp_video_wrap"}>
            <CustomVideoDisplayer
              className={"fm_wp_vd_wp_video"}
              height={"22em"}
            />
          </div>
          <div className={"fm_wp_vd_wp_video_wrap"}>
            <CustomVideoDisplayer
              className={"fm_wp_vd_wp_video"}
              height={"22em"}
            />
          </div>
          <div className={"fm_wp_vd_wp_video_wrap"}>
            <CustomVideoDisplayer
              className={"fm_wp_vd_wp_video"}
              height={"22em"}
            />
          </div>
          <div className={"fm_wp_vd_wp_video_wrap"}>
            <CustomVideoDisplayer height={"22em"} />
          </div>
        </article>
      </div>
    </Section>
  );
};

export default FamousTeachers;
