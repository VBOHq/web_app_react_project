import React, { useEffect, useRef, useState } from "react";
import {
  ButtonWrapper,
  Container,
  FormWrapper,
} from "./Styles/SampleViewStyles";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../Context/Reducer/sampleViewReducers";
import ChildView from "./ChildView";

const SampleViewForm = () => {
  // form fields value holders
  const nameRef = useRef("");
  const emailRef = useRef("");

  // get dispatch function to manage the state
  const dispatch = useDispatch();

  // access the state as shown below based on the reducer you created
  const {
    sampleViewReducers: { formData },
  } = useSelector((state) => state);

  // open the console to see the state taken effect
  console.log("formData :>> ", formData);

  // handle what happens when a user submits a form
  const handleSubmit = () => {
    const data = {
      name: nameRef.current,
      email: emailRef.current,
    };
    dispatch(setFormData(data));
  };

  return (
    <Container>
      <div className="ct_wrapper">
        <header className="ct_wp_header">
          <h2>the sample form</h2>
        </header>
        <FormWrapper>
          <form className="ct_wp_fm_wp_form">
            <fieldset className="ct_fm_input_wrap">
              <legend>sample form</legend>
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className="ct_fm_input"
                id="name"
                onChange={(e) => (nameRef.current = e.target.value)}
              />
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                inputMode="email"
                name="email"
                placeholder="Enter email"
                className="ct_fm_input"
                id="email"
                onChange={(e) => (emailRef.current = e.target.value)}
              />
            </fieldset>
          </form>

          <ButtonWrapper>
            <button onClick={() => handleSubmit()}>submit</button>
            <button>look up</button>
          </ButtonWrapper>
        </FormWrapper>
      </div>
      <ChildView />
    </Container>
  );
};

export default SampleViewForm;
