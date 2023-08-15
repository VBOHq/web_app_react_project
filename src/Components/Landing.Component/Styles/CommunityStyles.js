import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .community_wrapper {
    width: var(--innerWidth);
    display: flex;
    flex-flow: column;
    align-items: center;

    .com_wp_header {
      width: 70%;
      min-width: 300px;
      margin-bottom: 2rem;
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

      .com_wp_btn_wrap {
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
    }

    .com_wp_img_wrap {
      display: flex;
      flex-wrap: wrap;
      width: var(--fullWidth);
      gap: 1.5rem;
      div {
        flex: 1;
        min-width: 300px;
        height: 20em;
        border: 2px solid #000;
        border-right: 0.7rem solid;
        border-left: 0.7rem solid;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
