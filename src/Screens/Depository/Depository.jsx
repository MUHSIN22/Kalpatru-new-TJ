import React from 'react'
import './depository.css'

export default function Depository() {
    return (
        <div className='Depository'>
            <div className="section-1">
                <div className="section-1-content">
                    <h1 className='section-title'>Depository</h1>
                    <p className='section-para'>Depository is an institution that takes cash deposits from its customers, like a bank or savings and loans organisation. As a depository, a bank or other entity that holds and facilitates the trading of securities can be considered. Money stored for safekeeping is used to make loans to others, investments are made in other securities are made, and a funds transfer mechanism is provided by a depository. The deposit must be returned in the same condition as when it was deposited by a depository.</p>
                </div>
                <div className="section-1-image">
                    <img src='images/Depository.svg' alt='' />
                </div>
            </div>
            <div className="section-2">
                <div className="depository-col">
                    <h3>open</h3>
                    <h3>High</h3>
                    <h3>Low</h3>
                </div>
                <div className="depository-col">
                    <p>1,055.00</p>
                    <p>1,075.00</p>
                    <p>1,095.00</p>
                </div>
                <div className="depository-col">
                    <h3>Mkt cap</h3>
                    <h3>P/Eratio</h3>
                    <h3>Div Yield</h3>
                </div>
                <div className="depository-col">
                    <p>1,096TCr</p>
                    <p>35.26</p>
                </div>
                <div className="depository-col">
                    <h3>52-wk high</h3>
                    <h3>52-wk low</h3>
                </div>
                <div className="depository-col">
                    <p>1,734.40</p>
                    <p>883.20</p>
                </div>
            </div>
            <div className="section-3">
                <div className="mutualFund-header">
                    <h1 className='section-title'>What is depository ?</h1>
                </div>
                <div className="section-3-content">
                <p className='section-para'>Depositories are used by the general public for a variety of purposes. They eliminate the owner's risk of owning physical goods in the first place, which is important. Customers can deposit money into time and demand deposit accounts at banks and other financial institutions. A certificate of deposit (CD) is an interest-bearing account with a set maturity date, whereas a demand deposit account (such as a checking or savings account) retains money until they are needed for withdrawal. Security deposits, such as stocks or bonds, are another option for deposits. There are two options for depositing these assets: they can be held electronically or they can be dematerialized and stored as a certificate.</p>
                </div>
                <div className="mutualFund-header">
                    <h1 className='section-title'>What are CDSL and NSDL?</h1>
                </div>
                <div className="section-3-content">
                <p className='section-para'>As an investor, you should be aware of the two working depositories in India, which make the process of purchasing and selling shares possible.

                    There are two depositories in India: NSDL and Central Securities Depositories Limited (CSDL) (CDSL). Both depositories keep your dematerialized financial assets, such as stocks and bonds, and permit stock market trade. Opening a Demat account as well as a trading account is required before you can begin using the depositories and making investments. The best Demat account should be opened with a trustworthy stockbroker so that you may make the greatest investing decisions.

                </p>
                </div>
            </div>
        </div>
    )
}
