import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 mb-5">
                    <img src="media/images/education.svg" alt="education" style={{width:"70%"}}/>
                </div>
                <div className="col-lg-6 col-sm-12 mb-5">
                    <h1 className="mb-4 fs-2">Free and open market education</h1>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <Link to="/" style={{ textDecoration: "none" }}>Varsity <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <Link to="/" style={{ textDecoration: "none" }}>Trading Q&A <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Education;