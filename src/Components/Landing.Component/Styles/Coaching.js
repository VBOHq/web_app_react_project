import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .coaching_wrapper {
    width: var(--innerWidth);
    display: flex;
    flex-flow: column;
    align-items: center;
    .coc_wp_header {
      width: 70%;
      min-width: 300px;
      margin-bottom: 1rem;
      text-align: center;
      padding: 1rem 0rem;
      h1 {
        font-weight: 500;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      p {
        font-weight: 450;
        margin-bottom: 1.5rem;
      }
    }

    .coc_wp_btn_wrap {
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        width: 40%;
        background-color: var(--primaryColor);
        color: var(--cardColor);
        padding: 0rem 1rem;
        height: 3em;
      }
    }

    .coc_wp_video_wrap {
      width: var(--fullWidth);
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-columns: 300px 100px;
      gap: 2rem;
      min-width: 300px;
      & :nth-child(4) {
        grid-column: span 2;
        @media only screen and (max-width: 1029px) {
          grid-column: auto;
        }
      }
    }
  }
`;
