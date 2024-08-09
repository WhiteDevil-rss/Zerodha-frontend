import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <p className='fs-2 fw-medium text-center'>People</p>
            </div>
            <div className="row p-5">
                <div className="col-lg-1 col-sm-0"></div>
                <div className='col-lg-5 col-sm-12'>
                    <section style={{ width: "85%" }} className='lh-lg text-muted text-center'>
                        <img src="media/images/nithinKamath.jpg" alt="Nithin Kamath" style={{ borderRadius: "100%", width: "60%" }} className='mb-4' />
                        <h5>Nithin Kamath</h5>
                        <p>Founder, CEO</p>
                    </section>
                </div>

                <div className='col-lg-5 col-sm-12'>
                    <section style={{ width: "85%", fontSize: "16px" }} className='lh-lg text-muted'>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <Link to="/" style={{ textDecoration: "none" }}>Homepage</Link> / <Link to="/" style={{ textDecoration: "none" }}>TradingQnA</Link> / <Link to="/" style={{ textDecoration: "none" }}>Twitter</Link></p>
                    </section>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
            </div>
        </div>
    );
}

export default Team;