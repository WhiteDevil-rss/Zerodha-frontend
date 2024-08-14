import React from 'react';

function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                    <img src="media/images/homeHero.png" alt="HeroImg" className='mb-5'/>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button style={{width:"10rem",margin:"0 auto"}} className='p-2 btn btn-primary mt-4 fs-5 mb-5'>Sign up now</button>
            </div>
        </div>
    );
}

export default Hero;