import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <p className='fs-2 fw-medium text-center'>We pioneered the discount broking model in India. <br />
                    Now, we are breaking ground with our technology.</p>
            </div>
            <div className="row mt-5 p-5 border-top">
                <div className="col-lg-1 col-sm-0"></div>
                <div className='col-lg-5 col-sm-12'>
                    <section style={{ width: "85%" }} className='lh-lg text-muted'>
                        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </section>
                </div>

                <div className='col-lg-5 col-sm-12'>
                    <section style={{ width: "85%",fontSize:"16px"}} className='lh-lg text-muted'>
                        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p><Link to="/" style={{textDecoration:"none"}}>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to="/" style={{textDecoration:"none"}}>blog</Link> or see what the media is <Link to="/" style={{textDecoration:"none"}}>saying about us</Link>.</p>
                    </section>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
            </div>
        </div>
    );
}

export default Hero;