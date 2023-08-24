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
    margin: 0;
    @media (min-width: 768px) { 
      flex-direction: row; 
      border-radius: 8px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 28px 0;
    }
    

    .right {
      padding: 2rem;
      margin-bottom: 32px;
      @media (min-width: 768px) { 
        order: 1;
        flex: 0 0 50%;
      }
      .ct_form_wrapper {
        justify-content: center;
        display: flex;
        flex-direction: column;
        background-color: var(--bgColor);
        box-shadow: 0 12px 34px rgba(65,62,101,.103);
        padding: 48px 16px;
        border-radius: 4px;
        @media (min-width: 768px) { 
          padding: 48px;
        }

        .ct_wp_header {
            margin-bottom: 1rem;

            .logo-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              margin-bottom: 6px;
              .hd_wp_iw_icon {
                font-size: 2rem;
                color: var(--primaryColor);
              }
        
              small {
                font-size: 1.2rem;
                color: var(--primaryColor);
              }
            }
            h2 {
                text-align: center;
                font-size: 20px;
                @media (min-width: 768px) { 
                  font-size: 28px;
                }
            }
        }

      }

      
    } 

    .left {
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      @media (min-width: 768px) { 
        order: 0;
        flex: 0 0 50%;
        
      }

      .content-wrapper {
        position: relative;
        display: none;
        @media (min-width: 768px) { 
            display: block;  
        }
        .free-trial {
          color: var(--secondaryColor);
          font-weight: 600;
          font-size: 65px;
          line-height: 73px;
          margin-bottom: 200px;
          letter-spacing: -1.87579px;
        }

        img {
            position: absolute;
            top: 96px;
            width: 300px;
            max-width: 100%;
            height: auto;
        }

        p {
          margin-bottom: 16px;

          .account {
            color: #90a4ae;
          }

          .signup {
            color: var(--primaryColor);
            font-size: 16px;
            font-weight: 500;
            padding: 4px 15px;
            cursor: pointer;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
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
   } 

   .password {
    text-align: center;
     margin-top: 1rem;
     color: #a2a7ab;
    font-weight: 500;
    font-size: 15px;
    text-decoration: none;
    &:hover {
        color: var(--primaryColor);
        text-decoration: underline;
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