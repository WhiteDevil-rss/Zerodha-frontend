import React from 'react';
import { Link } from 'react-router-dom';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className="row p-5 mb-5">
                <div className="col-lg-8 col-sm-12 p-5">
                    <img src={imageURL} alt="UiImage" style={{width:"70%",aspectRatio:"3/2",objectFit:"contain"}}/>
                </div>
                <div className="col-lg-4 col-sm-12 p-5 lh-lg">
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='row mt-3'>
                        <span className="col-lg-6 col-sm-12">
                            <Link to={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                        </span>
                        <span className="col-lg-6 col-sm-12">
                            <Link to={learnMore} style={{textDecoration:"none"}}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                        </span>
                    </div>
                    <section className='row mt-3'>
                        <span className="col-lg-6 col-sm-12">
                            <Link to={googlePlay} style={{textDecoration:"none"}}><img src="media/images/googlePlayBadge.svg" alt="Google Play Store" /></Link>
                        </span>
                        <span className="col-lg-6 col-sm-12">
                            <Link to={appStore} style={{textDecoration:"none"}}><img src="media/images/appstoreBadge.svg" alt="App Store" /></Link>
                        </span>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;