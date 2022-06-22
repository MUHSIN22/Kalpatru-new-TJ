import Accordion from "../../Components/Accordion/Accordion";
import React from "react";
import { Link } from "react-router-dom";
import "./trading.css";
export default function Trading() {
  return (
    <div className="Trading">
      <div className="trading-section-1">
        <div className="trading-section-1-content">
          <h1 className="section-title">Trading</h1>
          <p>
            Trade involves the transfer of goods and services from one person or
            entity to another
          </p>
          <Link to="/ipo">Trading with us</Link>
        </div>
        <div className="trading-section-1-image">
          <img src="/images/trading-header.svg" alt="" />
        </div>
      </div>
      <div className="trading-section-2">
        <img src="/images/trading-banner.svg" alt="" />
        <h1>What is Trading?</h1>
        <p>
          Stock trading involves buying and selling stocks frequently in an
          attempt to time the market. The goal of stock traders is to capitalize
          on short-term market events to sell stocks for a profit, or buy stocks
          at a low. Some stock traders are day traders, which means they buy and
          sell several times throughout the day.
        </p>
      </div>
      <div className="trading-section-3">
        <h1>Equity</h1>
        <Accordion title="What is Equity?">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
                The phrase "equity" is used to describe fairness and justice, as
                opposed to the term "equality" itself: In contrast to equality,
                which is offering the same to everyone, equity means
                acknowledging and making adjustments to inequalities because we
                do not all start from the same place. Bias and systemic
                structures can create hurdles that we need to identify and
                overcome, both intentionally and unintentionally.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="trading-section-4">
        <img src="/images/trading-faq.svg" alt="" />
        <div className="section-4-content">
          <h1>What Is F&O</h1>
          <p>
            It is possible to buy and sell a specific stock or index in the
            future by using derivative contracts such as futures and options.
            The derivatives market is a subset of the equities market that deals
            in financial instruments. The most frequent form of derivative
            contract involves the purchase and sale of futures and options. It
            is a less risky investment than the stock market because of its
            speculative character.
          </p>
        </div>
      </div>
      <div className="trading-section-2">
        <h1>What is Comodity?</h1>
        <p>
          Commodity trading is where various commodities and their derivatives
          products are bought and sold. A commodity is any raw material or
          primary agricultural product that can be bought or sold, whether
          wheat, gold, or crude oil, among many others
        </p>
      </div>
      <div className="trading-section-2">
        <h1>What is SLB?</h1>
        <p>
          Using the Securities Lending and Borrowing Mechanism, investors can
          take out short-term loans or long-term loans of their stock. Hedging
          can be accomplished without resorting to the futures market thanks to
          the platform. Investors who borrow money from SLB are typically
          short-term traders who wish to sell shares they don't own. Lenders, on
          the other hand, are investors who purchased shares with the intention
          of holding them for the long term but have already sold them or
          otherwise disposed of them.
        </p>
      </div>
    </div>
  );
}
