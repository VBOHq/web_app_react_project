import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .recommend_wrapper {
    width: var(--innerWidth);
    display: flex;
    flex-flow: column;
    align-items: center;
    .rc_wp_header {
      width: 70%;
      min-width: 300px;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 2rem;
      padding: 1rem 0rem;
      @media only screen and (max-width: 673px) {
        width: 100%;
      }

      div {
        width: 80%;
        min-width: 300px;
        font-weight: normal;
        margin-bottom: 1rem;
        text-align: center;

        h1 {
          text-align: center;
          font-size: 2rem;
          strong {
            color: var(--uniqueColor);
            font-size: 2rem;
            font-weight: normal;
          }

          span {
            font-size: 2rem;
            font-weight: normal;
          }
        }
      }

      .rc_wp_hd_highlight {
        width: var(--fullWidth);
      }
    }

    .rc_wp_recommendLists {
      min-width: 300px;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-around;
      gap: 10px;
      .rc_wp_rcl_card {
        flex: 0.33;
        min-width: 300px;
        .rc_wp_rcl_cd_header {
          text-align: center;
          margin-bottom: 1rem;
          h3 {
            text-transform: capitalize;
          }
        }
        .rc_wp_rcl_cd_testimony {
          padding: 0rem 1rem;
          q {
            text-align: center;
          }
        }

        @media only screen and (max-width: 673px) {
          flex: 0.9;
        }
      }
    }
  }
`;
