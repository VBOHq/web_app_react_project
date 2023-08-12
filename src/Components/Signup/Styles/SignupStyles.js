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
  background-color: var(--bgColor);
  .ct_wrapper {
    width: var(--innerWidth);
    background-color: var(--bgColor);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0;
    margin: 32px 0;
    @media (min-width: 768px) { 
      flex-direction: row; 
      border-radius: 8px;
      box-shadow: 0 12px 34px rgba(65,62,101,.103);
      max-width: 1200px;
      margin: 40px auto;
      padding: 40px 0;
    }
    

    .right {
      padding: 2rem;
      margin-bottom: 32px;
      @media (min-width: 768px) { 
        order: 1;
        flex: 1:
      }
      .ct_wp_header {
        margin-bottom: 1rem;
        h2 {
          text-align: center;
          font-size: 28px
        }
      }

      
    } 

    .left {
      padding: 0 30px;
      .img-wrapper {
        width: 100%;
        height: auto;
        margin-bottom: 16px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      @media (min-width: 768px) { 
        order: 0;
        flex: 1;
        .img-wrapper {
          min-width: 300px;
          height: auto;
          margin-bottom: 16px;
          img {
            max-width: 100%;
            height: auto;
          }
        }
      }

      .content-wrapper {
        .free-trial {
          color: var(--primaryColor);
        }

        p {
          margin-bottom: 16px;
        }

        .membership {
          margin-bottom: 16px;
        }

        ul {
          padding-left: 2rem;
          margin-bottom: 1rem;
          li {
            margin-bottom: 1rem;
          }
        }
      }
      
    }
  }
`;

export const FormWrapper = styled.div`
  /* nested selectors */
  form {
    width: 100%;
    
      .ct_fm_input_wrap {
        display: flex;
        flex-flow: column;
        gap: 10px;
        padding: 0.5rem;

        label {
          text-transform: capitalize;
          font-weight: 500;
        }
        input {
          width: 100%;
          height: 4em;
          border-radius: 0.5rem;
          border: 1px solid #d9d9d9;
          outline: none;
          padding: 1rem;
          color: rgba(0,0,0,.85);
          display: inline-block;

          &::placeholder {
            font-size: 16px;
            padding: 5px;
          }
        }
      }

      .checkbox-wrapper {
        padding: 0.5rem;
        display: flex;
        gap: 16px;
        margin-bottom: 1rem;

        input {
          font-size: 14px;
          color: rgba(0,0,0,.85);
        }
      }
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  min-width: 250px;
  padding: 0.5rem;

  /* nested element */
  button {
    width: 100%;
    height: 3em;
    border: none;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
    transition: background-color 1s ease-in-out;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: var(--primaryColor);

    &:hover {
        background-color: var(--secondaryColor);
        color: var(--bgColor);
    }
  }
`;