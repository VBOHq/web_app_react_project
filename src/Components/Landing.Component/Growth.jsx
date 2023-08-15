import React from "react";
import { Section } from "./Styles/GrowthStyles";
import { growthMetaData } from "./Utils/langingPageUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../Common/CustomButton";

const Growth = () => {
  return (
    <Section>
      <div className="growth_wrapper">
        <header className="grt_wp_header">
          <div>
            <h1>
              achieving success is easier with <br /> webApp
            </h1>
          </div>
          <div>
            <h1>choose your growth plan now!</h1>
          </div>
        </header>

        <div className="grt_wp_packages">
          {growthMetaData.map(
            ({
              level,
              name,
              packages,
              price,
              currency,
              annualPrice,
              id,
              duration,
            }) => {
              return (
                <div key={id} className="grt_wp_pkg_card">
                  <header className="grt_wp_pkg_cad_header">
                    <h3>
                      {level} <br /> ({name})
                    </h3>
                    <span>{`${currency}${price}/${duration.slice(0, 2)}`}</span>
                    <p>
                      billed annually{" "}
                      <small>
                        {currency}
                        {annualPrice}.
                      </small>{" "}
                      cancel anytime
                    </p>
                  </header>
                  <div className="grt_wp_pkg_cad_packages">
                    {packages.map((packag, index) => {
                      return (
                        <div key={index} className="grt_wp_pkg_cad_pkg_card">
                          <span>
                            <FontAwesomeIcon
                              icon={faCheck}
                              color="var(--secondaryColor)"
                              className="grt_wp_pkg_cad_pkg_cad_icon"
                            />
                          </span>
                          <small>{packag}</small>
                        </div>
                      );
                    })}
                    <div className="grt_wp_pkg_cad_pkg_cad_btn">
                      <CustomButton
                        text={"start now"}
                        backgroundColor={"var(--secondaryColor)"}
                        color={"var(--cardColor)"}
                        height={"2.7em"}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
};

export default Growth;
