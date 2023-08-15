import { styled } from "styled-components";

export const Article = styled.article`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  .art_wrapper {
    width: var(--innerWidth);
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 1rem 0rem;
    div:first-of-type {
      width: 60%;
      text-align: center;
      margin-bottom: 1.5rem;
      p {
        strong {
          color: var(--primaryColor);
        }
      }
    }
    div:last-of-type {
      width: var(--innerWidth);

      p {
        color: var(--uniqueColor);
        font-weight: bold;
        ::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
`;
