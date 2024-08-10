import React from 'react';
import { Link } from 'react-router-dom';

function Brokerage() {
    return (
        <div className="container border-top">
            <div className="row text-center px-5 pb-5 mt-5">
                <div className="col-lg-6 col-sm-12">
                    <Link to="/pricing" style={{ textDecoration: "none" }} className='fs-5'>Brokerage calculator</Link>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <Link to="/pricing" style={{ textDecoration: "none" }} className='fs-5'>List of charges</Link>
                </div>
            </div>
            <div className='px-5 lh-lg' style={{fontSize:"12px"}}>
                <ul className='text-muted text-12 px-5'>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                </ul>
            </div>
        </div>
    );
}

export default Brokerage;