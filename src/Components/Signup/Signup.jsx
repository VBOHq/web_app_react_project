import React, { useRef } from 'react'
import {Container, FormWrapper, ButtonWrapper } from "./Styles/SignupStyles"

const Signup = () => {
  // form fields value holders
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const checkbox = useRef("")

  // handle what happens when a user submits a form
  const handleSubmit = () => {
    const data = {
      name: name.current,
      email: email.current,
      password: password.current,
      checkbox: checkbox.current
    }
  }
  return (
    <Container>
        <div className='ct_wrapper'>
           <div className='right'>
              <div className="ct_wp_header">
                <h2>Create Your Account</h2>
              </div>
              <FormWrapper>
                <form>
                  <div className='ct_fm_input_wrap'>
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your first name and last name"
                      className="ct_fm_input"
                      id="name"
                      onChange={(e) => (name.current = e.target.value)}
                    />
                  </div>
                  <div className='ct_fm_input_wrap'>
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      inputMode="email"
                      name="email"
                      placeholder="email@address.com"
                      className="ct_fm_input"
                      id="email"
                      onChange={(e) => (email.current = e.target.value)}
                    />
                  </div>
                  <div className='ct_fm_input_wrap'>
                    <label htmlFor="password">Create password</label>
                    <input
                      type="password"
                      inputMode="password"
                      name="password"
                      placeholder="Choose a unique password"
                      className="ct_fm_input"
                      id="password"
                      onChange={(e) => (password.current = e.target.value)}
                    />
                  </div>
                  <div className="checkbox-wrapper">
                    <input 
                      type="checkbox" 
                      onChange={(e) => (checkbox.current = e.target.value)} 
                    />
                    <span>By checking this box, you agree to our <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a></span>
                  </div>
                </form>

                <ButtonWrapper>
                  <button  onClick={() => handleSubmit()}>Sign Up</button>
                </ButtonWrapper>
              </FormWrapper>
          </div>
          <div className='left'>
            <div className='img-wrapper'>
              <img src="./assets/app.png" alt="" />
            </div>
            <div className="content-wrapper">
              <h4 className='free-trial'>Start Your FREE 14 Day Trial Now!</h4>
              <p><i>"I love GrowthDay and how everybody is supportive of each other, regardless of where we are at in our life path." - R. Mendoza</i></p>
              <p><i>"LOVE this app!!! Listening to the Daily Fires has honestly been life-changing for me!!" - Elisa Y.</i></p>
              <p><i>"I use it everyday in my morning routine. Huge increase in all areas of my life and business." - T. Hayes</i></p>
              <h4 className='membership'>GrowthDay Starter membership includes:</h4>
              <ul>
                <li>Daily Motivational Coaching Audio from Brendon Burchard, the world's #1 high performance coach. ($499 value!)</li>
                <li>Digital Journal, featuring over 100 writing prompts. Unlimited and private entries! ($97 value!)</li>
                <li>Goal Setting & Project Planning tools to focus on what matters most, take clear and purposeful action, and crush your goals. ($97 value!)</li>
                <li>Life Assessments & Habit Tracking tools to track key life areas on a daily, weekly, and monthly basis. Plus recommendations for improvement! ($97 value!)</li>
              </ul>
              <p><strong>Your first 14-days are on us! Try it out Risk-Free! If you don't love it, just cancel!</strong></p>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default Signup
