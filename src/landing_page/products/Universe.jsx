import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className="container text-center">
            <section className='text-muted mb-5'>
                <h5>Want to know more about our technology stack? Check out the <Link to="/" style={{ textDecoration: "none" }}>Zerodha.tech</Link> blog.</h5>
            </section>
            <div className="row mt-5">
                <section className='mt-5 lh-lg'>
                    <h1>The Zerodha Universe</h1>
                    <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                </section>
                <section>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <img src="media/images/smallcaseLogo.png" alt="smallcase" style={{width:"50%",aspectRatio:"3/2",objectFit:"contain"}}/>
                            <p className='text-small text-muted'>Thematic investment platform</p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img src="media/images/streakLogo.png" alt="streak"  style={{width:"50%",aspectRatio:"3/2",objectFit:"contain"}}/>
                            <p className='text-small text-muted'>Algo & strategy platform</p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img src="media/images/sensibullLogo.svg" alt="sensibull" style={{width:"50%",aspectRatio:"3/2",objectFit:"contain"}}/>
                            <p className='text-small text-muted'>Option trading platform</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <img src="media/images/zerodhaFundhouse.png" alt="zerodhaFundhouse" style={{width:"50%",aspectRatio:"3/2",objectFit:"contain"}}/>
                            <p className='text-small text-muted'>Asset management</p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img src="media/images/tijori.svg" alt="tijori"  style={{width:"50%",aspectRatio:"3/2",objectFit:"contain"}}/>
                            <p className='text-small text-muted'>Fundamental research platform</p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img src="media/images/dittoLogo.png" alt="ditto" style={{width:"50%",aspectRatio:"3/2",objectFit:"contain"}}/>
                            <p className='text-small text-muted'>Insurance</p>
                        </div>
                    </div>
                </section>
                <button style={{width:"10rem",margin:"0 auto"}} className='p-2 btn btn-primary mt-4 fs-5 mb-5'>Sign up now</button>
            </div>
        </div>
    );
}

export default Universe;