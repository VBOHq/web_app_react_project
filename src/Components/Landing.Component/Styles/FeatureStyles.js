import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  .feature_wrapper {
    width: var(--innerWidth);
    .ft_wp_header {
      margin-bottom: 1.5rem;
      h1 {
        font-size: 2.5rem;
        text-align: center;
        font-weight: normal;
      }
    }
  }

  .ft_wp_featLists {
    display: flex;
    flex-flow: column;

    .ft_wp_fLs_highlights {
      display: flex;
      margin-bottom: 4rem;
      gap: 3em;
      padding: 0rem 1rem;
      flex-wrap: wrap;
      min-width: 300px;

      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      .ft_wp_fLs_hlt_left {
        flex: 0.5;
        min-width: 300px;
        @media only screen and (max-width: 904px) {
          flex: 1;
        }
        .ft_wp_fLs_hlt_header {
          margin-bottom: 1rem;
          span {
            font-size: 2.5rem;
            font-weight: bold;
          }

          h2 {
            font-size: 2rem;
            font-weight: 450;
          }
        }

        .ft_wp_fLs_hlt_text {
          margin-bottom: 1rem;

          p {
            font-weight: 400;
            font-size: 1.2;
          }
        }

        .ft_wp_fLs_hlt_btn_wrap {
          width: 100px;
          height: 2.5em;
          button {
            background-color: var(--secondaryColor);
            min-width: max-content;
            color: var(--cardColor);
            padding: 0rem 1rem;
          }
        }
      }

      .ft_wp_fLs_hlt_img {
        flex: 0.4;
        min-width: 300px;
        @media only screen and (max-width: 904px) {
          flex: 1;
        }

        img {
          width: 100%;
        }
      }
    }
  }
`;
