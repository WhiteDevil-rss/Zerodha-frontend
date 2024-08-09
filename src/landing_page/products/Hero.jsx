import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center mt-5 lh-lg">
                <h1>Technology</h1>
                <h5 className='text-muted mt-2 mb-4'>Sleek, modern, and intuitive trading platforms</h5>
                <h6>Check out our <Link to="/" style={{textDecoration:"none"}}>investment offerings <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link></h6>
            </div>
        </div>
    );
}

export default Hero;