import React from "react";
import CustomInputs from "../../Components/Inputs/Input";
import TestimonialCarousel from "../../Components/TestimonialCarousel/TestimonialCarousel";
import "./PartnerWithUs.css";
export default function PartnerWithUs() {
  return (
    <div className="PartnerWithUs-Container">
      <div className="PartnerWithUs-Banner">
        <div className="Banner-Content">
          <h1 className="section-title">Partner With Us</h1>
          <p className="section-para">
            our power and entrepreneurial spirit will make it profitable
          </p>
        </div>
        <div className="Banner-Image">
          <img src="/images/PWS-image.png" alt="" />
        </div>
      </div>
      <div className="Benefit-Container">
        <h1 className="section-title">Benefit of our association</h1>
        <div className="Benefits-Block">
          <p className="section-para">
            KALPATARU is a time tested, tried and trusted Share broker,
            Investment Advisor and D.P. We cover the complete Financial Services
            spectrum – Share broking, Derivative F & O in Equities, Commodity,
            Currency, Index and Investment Advisory services. We are also, as
            you know DP, providing depository services, distribution of
            financial products like Mutual Funds, Portfolio Management Advisory
            Services and IPO in which we have more than half market share of the
            Primary Market. If it is not boasting, Kalpataru is well equipped
            and can handle all the wealth creation and wealth management needs
            of the investing public
          </p>
          <p className="section-para">
            Life is not mere existing. For living life with full might, one
            should have Knowledge of Power. If you have it, you are blessed with
            Power of Knowledge. Your power and entrepreneurial spirit will make
            it profitable. If you are well versed in Finance world, here are
            ample of opportunities for you.
          </p>
        </div>
      </div>
      <div className="Details-Container">
        <h1 className="section-title">Drop Your Details</h1>
        <div className="Details-Form-row">
          <div className="Form-image">
            <img src="/images/Details-image.png" alt="" />
          </div>
          <div className="Details-Form">
            <CustomInputs
              label="Name"
              name="Name"
              placeholder="John Doe"
              width={80}
              type="text"
            />
            <CustomInputs
              label="Email"
              name="Name"
              placeholder="John Doe"
              width={80}
              type="text"
            />
            <CustomInputs
              label="Phone No"
              name="Name"
              placeholder="John Doe"
              width={80}
              type="text"
            />
            <label htmlFor="Message">Message</label>
            <textarea name="Message" id="" cols="30" rows="10"></textarea>
            <div className="Details-button">
              {" "}
              <button className="Details-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Partner-With-Carousel">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
