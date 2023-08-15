import { styled } from "styled-components";

export const Article = styled.article`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  .user_wrapper {
    width: var(--innerWidth);
    min-width: 300px;
    display: flex;
    gap: 2rem;
    min-width: 300px;
    padding: 1rem 0.4rem;
    flex-wrap: wrap;
    .usr_wp_card {
      flex: 1;
      min-width: 300px;
      .usr_wp_cd_heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 3em;
        margin-bottom: 1rem;

        h2 {
          font-weight: bold;
          font-size: 1.7rem;
          font-weight: 500;
        }
      }

      .usr_wp_cd_desc {
        min-height: 40vh;
        p {
          q {
            line-height: 1.5;
            font-size: 1.2rem;
          }
          small {
            color: var(--primaryColor);
            text-transform: capitalize;
          }
        }
      }
    }
  }
`;
