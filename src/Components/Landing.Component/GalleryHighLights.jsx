import React from "react";
import { Section } from "./Styles/GalleryHighLightStyles";
import CustomImage from "../../Common/CustomImage";
import { gallery } from "./Utils/langingPageUtil";
import CustomButton from "../../Common/CustomButton";

const GalleryHighLights = () => {
  return (
    <Section>
      <div className="sec_wrapper">
        <div className="sec_wp_video">
          <figure className="sec_wp_vd_img">
            {gallery?.map((photo, idx) => (
              <CustomImage
                key={idx}
                src={photo}
                alt={photo}
                width={"100%"}
                height={200}
              />
            ))}
            
          </figure>
        </div>
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
                <strong>Brendon Burchard</strong> 3-time New York Times
                bestseller and the most respect name in personal development for
                over a decade!s voluptatem sit, ducimus doloribus voluptates.
                Labore, sunt a.
              </li>
              <li>
                <strong>Trent Shelton</strong> the legendary motivational
                speaker and host of Straight Up with Trent Shelton!
              </li>
              <li>
                <strong>Bossbabe founders</strong> Danielle Canty and Natalie
                Ellis, who built one of the largest brands for ambitious women
                in the world!
              </li>
              <li>
                <strong>Lori Harder</strong> The world's leading personal
                finance and wealth teacher with ten New York Times bestsellers!
                (On demand)
              </li>
              <li>
                <strong>Brendon Burchard</strong> 3-time New York Times
                bestseller and the most respect name in personal development for
                over a decade!s voluptatem sit, ducimus doloribus voluptates.
                Labore, sunt a.
              </li>
              <li>
                <strong>Trent Shelton</strong> the legendary motivational
                speaker and host of Straight Up with Trent Shelton!
              </li>
              <li>
                <strong>Bossbabe founders</strong> Danielle Canty and Natalie
                Ellis, who built one of the largest brands for ambitious women
                in the world!
              </li>
              <li>
                <strong>Lori Harder</strong> The world's leading personal
                finance and wealth teacher with ten New York Times bestsellers!
                (On demand)
              </li>
              <li>
                <strong>Brendon Burchard</strong> 3-time New York Times
                bestseller and the most respect name in personal development for
                over a decade!s voluptatem sit, ducimus doloribus voluptates.
                Labore, sunt a.
              </li>
              <li>
                <strong>Trent Shelton</strong> the legendary motivational
                speaker and host of Straight Up with Trent Shelton!
              </li>
              <li>
                <strong>Bossbabe founders</strong> Danielle Canty and Natalie
                Ellis, who built one of the largest brands for ambitious women
                in the world!
              </li>
              <li>
                <strong>Lori Harder</strong> The world's leading personal
                finance and wealth teacher with ten New York Times bestsellers!
                (On demand)
              </li>
            </ul>
          </article>

          <div className="sec_wp_ct_btn_wrap_">
            <CustomButton text={"get multivated now!"} />
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default GalleryHighLights;
