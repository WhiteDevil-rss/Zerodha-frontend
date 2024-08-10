import React from 'react';

function Hero() {
    return (
        <div className="container mt-5">
            <div className="row mt-5 text-center lh-lg">
                <section className='border-bottom mt-5'>
                    <h1 className='fw-medium display-5'>Pricing</h1>
                    <h5 className='mb-5 mt-1 text-muted'>Free equity investments and flat ₹20 intraday and F&O trades</h5>
                </section>
                <div className="col-lg-4 col-sm-12 p-5">
                    <img src="media/images/pricingEquity.svg" alt="equity" style={{width:"90%",aspectRatio:"3/2",objectFit:"contain"}}/>
                    <h3>Free equity delivery</h3>
                    <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-5">
                    <img src="media/images/intradayTrades.svg" alt="Intraday" style={{width:"90%",aspectRatio:"3/2",objectFit:"contain"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-5">
                    <img src="media/images/pricingEquity.svg" alt="mf" style={{width:"90%",aspectRatio:"3/2",objectFit:"contain"}}/>
                    <h3>Free direct MF</h3>
                    <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;