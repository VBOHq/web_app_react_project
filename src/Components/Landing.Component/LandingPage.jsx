import React from "react";
import TopArea from "./TopArea";
import GuideLine from "./GuideLine";
import GalleryHighLights from "./GalleryHighLights";
import Recommendation from "./Recommendation";
import Features from "./Features";
import FamousTeachers from "./FamousTeachers";
import UserRating from "./UserRating";
import Coaching from "./Coaching";
import Community from "./Community";
import Growth from "./Growth";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <TopArea />
      <GuideLine />
      <GalleryHighLights />
      <Recommendation />
      <Features />
      <FamousTeachers />
      <UserRating />
      <Coaching />
      <Community />
      <UserRating />
      <Growth />
      <Footer />
    </div>
  );
};

export default LandingPage;
