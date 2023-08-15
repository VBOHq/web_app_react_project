import { styled } from "styled-components";

export const Section = styled.section`
  width: var(--fullWidth);
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  .growth_wrapper {
    width: var(--innerWidth);
    display: flex;
    flex-flow: column;
    align-items: center;

    .grt_wp_header {
      width: 60%;
      min-width: 300px;
      margin-bottom: 3rem;
      div:first-of-type {
        width: 100%;
        text-align: center;
        padding: 0.5rem;

        h1 {
          font-weight: 500;
          font-size: 2rem;
          text-transform: capitalize;
        }
      }
      div:last-of-type {
        width: 100%;
        text-align: center;
        padding: 0.5rem;
        h1 {
          font-weight: 500;
          font-size: 1.9rem;
          text-transform: capitalize;
        }
      }
    }

    .grt_wp_packages {
      display: flex;
      align-items: center;
      gap: 2rem;
      flex-wrap: wrap;
      .grt_wp_pkg_card {
        background-color: var(--cardColor);
        flex: 1;
        filter: drop-shadow(0px 0px 5px #eee);
        padding: 2rem;
        min-width: 300px;
        .grt_wp_pkg_cad_header {
          display: flex;
          justify-content: center;
          flex-flow: column;
          align-items: center;
          text-align: center;
          margin-bottom: 1rem;

          h3 {
            color: var(--secondaryColor);
            margin-bottom: 1rem;
            font-size: 1.5rem;
            &::first-letter {
              text-transform: uppercase;
            }
          }

          span {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
        }

        .grt_wp_pkg_cad_packages {
          display: flex;
          flex-flow: column;
          gap: 1rem;
          .grt_wp_pkg_cad_pkg_card {
            display: flex;
            gap: 1rem;
            span {
              .grt_wp_pkg_cad_pkg_cad_icon {
                font-size: 1.5rem;
              }
            }
          }
          .grt_wp_pkg_cad_pkg_cad_btn {
            margin: 1rem;
          }
        }
      }
    }
  }
`;
