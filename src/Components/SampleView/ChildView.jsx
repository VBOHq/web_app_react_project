import React from "react";
import { useSelector } from "react-redux";

const ChildView = () => {
  const {
    sampleViewReducers: { formData },
  } = useSelector((state) => state);

  console.log("formData :>> ", formData);
  return <div>ChildView</div>;
};

export default ChildView;
