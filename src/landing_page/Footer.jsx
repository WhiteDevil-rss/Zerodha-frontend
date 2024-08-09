import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer style={{ backgroundColor: "#FBFBFB" }} className='border-top mt-5'>
            <div className="container mb-4">
                <div className="row p-4 gap-0">
                    <div className="col-lg-3 col-sm-12 p-4">
                        <img src="media/images/logo.svg" alt="logo" style={{ width: "50%" }} />
                        <p style={{ fontSize: "12.8px" }} className='mt-3'>&copy; 2010 - 2024, Zerodha Broking Ltd. <br />All rights reserved.</p>
                    </div>
                    <div className="col-lg-3 col-sm-12 fw-medium mb-1 p-4">
                        <p style={{ color: "RGB(66, 66, 66)", fontSize: "18px" }}>Company</p>
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">About</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Products</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Pricing</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Referral programme</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Careers</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Zerodha.tech</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Press & media</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Zerodha Cares (CSR)</Link><br />
                    </div>
                    <div className="p-4 col-lg-3 col-sm-12 fw-medium mb-1">
                        <p style={{ color: "RGB(66, 66, 66)", fontSize: "18px" }}>Support</p>
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Contact us</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Support portal</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Z-Connect blog</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">List of charges</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Downloads & resources</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Videos</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Market overview</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">How to file a complaint?</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Status of your complaints</Link><br />
                    </div>
                    <div className="p-4 col-lg-3 col-sm-12 fw-medium mb-1">
                        <p style={{ color: "RGB(66, 66, 66)", fontSize: "18px" }}>Account</p>
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Open an account</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">Fund transfer</Link><br />
                        <Link to="/" style={{ textDecoration: "none solid rgb(66, 66, 66)", fontSize: "16px" }} className="text-muted lh-lg">60 day challenge</Link><br />
                    </div>
                </div>
                <div className="mt-1 text-muted p-4 " style={{ fontSize: "10.4px", color: "#9B9B9B" }}>
                    <p style={{ color: "#9B9B9B" }}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p style={{ color: "#9B9B9B" }}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p style={{ color: "#9B9B9B" }}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                    <p style={{ color: "#9B9B9B" }}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p style={{ color: "#9B9B9B" }}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p style={{ color: "#9B9B9B" }}>"Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
                <div className="mx-5 px-5 mb-3 m-foot-nav">
                    <div className="d-flex flex-row justify-content-evenly px-5 m-foot-nav" style={{ fontSize: "12px", color: "#424242" }}>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>NSE</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>BSE</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>MCX</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>Terms & conditions</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>Policies & procedures</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>Privacy policy</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>Disclosure</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>For investor's attention</Link>
                        <Link className="nav-link" to="/" style={{ fontSize: "12px", color: "#9B9B9B" }}>Investor charter</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;