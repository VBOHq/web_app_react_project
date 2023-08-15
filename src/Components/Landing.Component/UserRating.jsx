import React from "react";
import { Article } from "./Styles/UserRatingStyles";
import { userRating } from "./Utils/langingPageUtil";
import CustomRating from "../../Common/CustomRating";

const UserRating = () => {
  return (
    <Article>
      <div className="user_wrapper">
        {userRating.map(({ desc, id, title, user, star }) => {
          return (
            <div key={id} className="usr_wp_card">
              <header className="usr_wp_cd_heading">
                <h2>{title}</h2>
                <CustomRating star={star} className="starRating" />
              </header>

              <div className="usr_wp_cd_desc">
                <p>
                  <q>{desc}</q> <small>{user}</small>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Article>
  );
};

export default UserRating;
