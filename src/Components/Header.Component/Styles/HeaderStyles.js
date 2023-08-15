import { styled } from "styled-components";

export const Container = styled.header`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 10px #ccc;
  margin-bottom: 1rem;
  .hd_wrapper {
    width: var(--innerWidth);
    display: flex;
    justify-content: space-between;
    min-height: 4em;

    .hd_wp_icon_wrap {
      width: 150px;
      display: flex;
      align-items: center;
      gap: 8px;
      .hd_wp_iw_icon {
        font-size: 2rem;
        color: var(--primaryColor);
      }

      small {
        font-size: 1.2rem;
        color: var(--primaryColor);
      }
    }
    .hd_wp_btn_wrap {
      width: 150px;
      display: flex;
      align-items: center;

      button {
        width: var(--fullWidth);
        height: 3em;
        border: none;
        outline: none;
        background-color: transparent;
        transition: background-color 1s ease-in-out;
        text-transform: capitalize;
        border-radius: 1rem;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
          background-color: var(--primaryColor);
          color: var(--cardColor);
        }
      }
    }
  }
`;
