import React from 'react';
import { Link } from 'react-router-dom';

function CreateTicket() {
    return (
        <div className="container p-5">
            <header className='p-5'>
                <h4 className='fw-normal text-12'>To create a ticket, select a relevant topic</h4>
            </header>
            <div className="row px-5">
                    <div className="col-lg-4 col-sm-12 fw-light text-12 mb-5">
                        <h5 className='mb-3'><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
                        <div className='px-3'>
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Getting started</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Online</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Offline</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Charges</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Company, Partnership and HUF</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Non Resident Indian (NRI)</Link><br />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 fw-light text-12 mb-5">
                        <h5 className='mb-3'><i class="fa-regular fa-user"></i> Your Zerodha Account</h5>
                        <div className='px-3'>
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Login credentials</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Your Profile</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Account modification and segment addition</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>CMR & DP ID</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Nomination</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Transfer and conversion of shares</Link><br />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 fw-light text-12 mb-5">
                        <h5 className='mb-3'><i class="fa-solid fa-chart-simple"></i> Trading and Markets</h5>
                        <div className='px-3'>
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Trading FAQs</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Kite</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Margins</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Product and order types</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Corporate actions</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Kite features</Link><br />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 fw-light text-12 mb-5">
                        <h5 className='mb-3'><i class="fa-regular fa-credit-card"></i> Funds</h5>
                        <div className='px-3'>
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Fund withdrawal</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Adding funds</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Adding bank accounts</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>eMandates</Link><br />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 fw-light text-12 mb-5">
                        <h5 className='mb-3'><i class="fa-solid fa-chart-pie"></i> Console</h5>
                        <div className='px-3'>
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>IPO</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Portfolio</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Funds statement</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Profile</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Reports</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Referral program</Link><br />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 fw-light text-12 mb-5">
                        <h5 className='mb-3'><i class="fa-solid fa-coins"></i> Coin</h5>
                        <div className='px-3'>
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Understanding mutual funds and Coin</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Coin app</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Coin web</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>Transactions and reports</Link><br />
                            <Link to="/support" style={{ textDecoration: "none" }} className='lh-lg'>National Pension Scheme (NPS)F</Link><br />
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default CreateTicket;