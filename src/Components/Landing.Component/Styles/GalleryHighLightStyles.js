import { styled } from "styled-components";
import { Section as ExtendElement } from "./GuidelinesStyles";

export const Section = styled(ExtendElement)`
  .sec_wrapper {
    flex-wrap: wrap;
  }

  .sec_wp_video {
    padding: 1rem 0rem;
    min-height: 30vh;
    .sec_wp_vd_img {
      flex: 0.5;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 10px;
      padding: 1rem;
      img {
        object-fit: cover;
        border-radius: 0.8rem;
      }
    }
  }
  .sec_wp_ct_btn_wrap_ {
    width: 50%;
    min-width: 300px;
    height: 4em;

    button {
      width: 100%;
      background-color: var(--secondaryColor);
      font-weight: bold;
      color: var(--cardColor);
    }
  }
`;
