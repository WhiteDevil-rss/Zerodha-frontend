import React from 'react';
import {Link} from 'react-router-dom';

function Stats() {
    return (
        <div className="container mt-5 p-3">
            <div className="row p-5">
                <div className="col-lg-6 col-sm-12">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4 mt-5 fw-normal'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with <br/>₹4.5+ lakh crores of equity investments and contribute to <br/>15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-4 mt-5 fw-normal'>No spam or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push <br/>notifications. High quality apps that you use at your <br/>pace, the way you like.</p>
                    <h2 className='fs-4 mt-5 fw-normal'>The Zerodha universe</h2>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments <br/>in 30+ fintech startups offer you tailored services <br/>specific to your needs.</p>
                    <h2 className='fs-4 mt-5 fw-normal'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just <br/>facilitate transactions, but actively help you do better <br/>with your money.</p>
                </div>
                <div className="col-lg-6 col-sm-12 ">
                    <img src="media/images/ecosystem.png" alt="ecosystem" style={{ width: "115%" }} />
                    <div className='text-center mt-4'>
                        <Link to="/" style={{textDecoration:"none"}}>Explore our products <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/" style={{textDecoration:"none"}}>Try Kite demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stats; 
