import { styled } from "styled-components";

// reusable styles
const DisplayFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// extending the flex box of DisplayFlex properties to Container styles
export const Container = styled(DisplayFlex)`
  width: var(--fullWidth);
  min-height: 100vh;
  background-color: var(--secondaryColor);
  .ct_wrapper {
    width: var(--innerWidth);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    .ct_wp_header {
      margin-bottom: 2rem;
      h2 {
        text-transform: uppercase;
        color: var(--bgColor);
      }
    }
  }
`;

export const FormWrapper = styled.div`
  width: 50%;
  min-width: 300px;
  border-radius: 1rem;
  background-color: var(--primaryColor);
  padding: 1rem;
  /* nested selectors */
  form {
    width: 100%;
    margin-bottom: 1rem;
    .ct_fm_input_wrap {
      display: flex;
      flex-flow: column;
      gap: 10px;
      padding: 0.5rem;
      legend {
        text-transform: capitalize;
      }
      input {
        height: 3em;
        border-radius: 0.5rem;
        border: none;
        outline: none;
        padding: 1rem;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  min-width: 250px;
  padding: 1rem;
  display: flex;
  gap: 10px;
  /* nested element */
  button {
    width: 150px;
    height: 3em;
    border: none;
    color: var(--bgColor);
    text-transform: capitalize;
    transition: background-color 1s ease-in-out;
    border-radius: 0.5rem;
    cursor: pointer;
    /* using psuedos */
    &:first-of-type {
      background-color: red;
    }

    &:last-of-type {
      background-color: transparent;
      border: 2px solid;
      /* nested psuedos */
      &:hover {
        background-color: var(--secondaryColor);
      }
    }
  }
`;
