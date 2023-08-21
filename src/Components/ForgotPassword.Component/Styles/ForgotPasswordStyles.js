import styled from "styled-components";

export const Container = styled.div`
  width: var(--fullWidth);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 100%;
  background-color: rgba(255, 255, 255, 0.7);
  background-blend-mode: overlay;
  @media only screen and (max-width: 637px) {
    flex-wrap: wrap;
  }

  .ct_wp_aside {
    width: 55%;
    min-height: 80vh;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (max-width: 637px) {
      flex: 1;
      display: none;
    }

    .ct_wp_asd_header {
      h1 {
        font-size: 3rem;
        text-align: center;
        &::first-letter {
          text-transform: uppercase;
        }
      }

      span {
        color: var(--primaryColor);
        font-size: 4rem;
        margin-left: 1rem;
        font-family: "Pacifico", cursive;
      }
    }
    .ct_wp_asd_signup {
      width: 40%;
      min-width: 300px;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      transform: translateY(40%);

      p {
        display: flex;
        gap: 0.5em;
        width: max-content;
        small {
          font-size: 0.8rem;
          /* opacity: 0.5; */
        }
        .ct_wp_asd_sgnup_link {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 0.8rem;
          text-decoration: none;
          color: var(--secondaryColor);
          font-weight: bold;
          opacity: 1;
        }
      }
    }
  }
`;
export const FormWraper = styled.div`
  width: 35%;
  min-width: 300px;
  min-height: 80vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background-color: var(--cardColor);
  border-radius: 0.2rem;
  padding: 0rem 2.5rem;
  box-shadow: 0px 0px 5px #ccc;
  @media only screen and (max-width: 637px) {
    flex: 1;
  }

  .fw_icon_wrap {
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
    .fw_icon {
      font-size: 2rem;
      color: var(--primaryColor);
    }

    small {
      font-size: 2rem;
      color: var(--primaryColor);
    }
  }

  .fw_wp_header {
    text-align: center;
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      &::first-letter {
        text-transform: uppercase;
      }
    }

    p {
      opacity: 0.5;
    }
  }

  .fw_wp_form {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.8rem;
    label {
      width: 100%;
    }
    input {
      width: 100%;
      padding: 1rem;
      border: none;
      outline: none;
      border-radius: 0.3rem;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .fw_wp_btn_wrap {
      margin: 1rem 0rem;
      .fw_wp_btn_wp_btn {
        background-color: var(--primaryColor);
        color: var(--cardColor);
        height: 3em;
        width: 200px;
        small {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.1rem;
          text-transform: capitalize;
          &::first-letter {
            /* text-transform: uppercase !important; */
          }
          span {
            margin-left: 1rem;
          }
        }
      }
    }
  }
  .ct_wp_asd_signup {
    width: 40%;
    min-width: 300px;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: translateY(40%);
    display: none;
    @media only screen and (max-width: 637px) {
      width: 100%;
      display: flex;
    }

    p {
      display: flex;
      gap: 0.5em;
      width: max-content;
      small {
        font-size: 0.8rem;
        opacity: 0.5;
      }
      .ct_wp_asd_sgnup_link {
        display: flex;
        align-items: center;
        width: max-content;
        gap: 0.8rem;
        text-decoration: none;
        color: var(--secondaryColor);
        font-weight: bold;
        opacity: 1;
      }
    }
  }
`;
