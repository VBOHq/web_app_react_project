import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .famous_wrapper {
    width: var(--innerWidth);
    display: flex;
    align-items: center;
    flex-flow: column;
    padding: 1rem;
    min-height: 40vh;
    .fm_wp_header {
      width: 70%;
      min-width: 300px;
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-bottom: 2rem;
      padding: 1rem 0rem;
      text-align: center;
      @media only screen and (max-width: 673px) {
        width: 100%;
      }
      h1 {
        font-size: 2rem;
        font-weight: 450;
        margin-bottom: 1rem;
        text-transform: capitalize;
      }
    }

    .fm_wp_video_wrap {
      min-width: 300px;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-around;
      gap: 1.5rem;

      .fm_wp_vd_wp_video_wrap {
        flex-basis: 40%;
        flex-grow: 0.4;
        min-width: 300px;

        @media only screen and (max-width: 765px) {
          flex: 1;
        }
      }
    }
  }
`;
