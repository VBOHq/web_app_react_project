import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem 0rem;
  .sec_wrapper {
    width: var(--innerWidth);
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap-reverse;
    .sec_wp_content {
      @media only screen and (max-width: 1029px) {
        flex: 1;
      }
      flex: 0.5;
      min-width: 300px;
      .sec_wp_ct_header {
        h2 {
          font-weight: normal;
          word-spacing: 8px;
          font-size: 1.7rem;
        }
      }

      .sec_wp_ct_lists {
        margin-bottom: 1rem;
        padding: 0rem 2rem;
        ul {
          padding: 1rem;
          display: flex;
          flex-flow: column;
          gap: 10px;

          li {
            strong {
              text-decoration: underline;
            }
          }
        }
      }

      .sec_wp_ct_btn_wrap {
        width: 40%;
        min-width: 150px;
        height: 3em;
        button {
          width: 100%;
          height: 100%;
          background-color: var(--primaryColor);
          color: var(--cardColor);
          border: none;
          outline: none;
          border-radius: 0.5rem;
          text-transform: capitalize;
          small {
            text-transform: lowercase;
          }
        }
      }
    }

    .sec_wp_video {
      flex: 0.5;
      min-width: 300px;
      min-height: 22em;
      @media only screen and (max-width: 1029px) {
        flex: 1;
      }
    }
  }
`;
