import React from 'react';
import { Link } from 'react-router-dom';

function RightSection({ imageURL, productName, productDescription, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mb-5'>
            <div className="row mb-5 p-5">
                <div className="col-lg-1 col-sm-0"></div>
                <div className="col-lg-4 col-sm-12 lh-lg mt-5">
                    <section className="mt-5 p-5">
                        <h1>{productName}</h1>
                        <p className='text-muted'>{productDescription}</p>
                        <div className='row mt-3 mb-3'>
                            <span className="col-lg-6 col-sm-12">
                                <Link to={learnMore} style={{ textDecoration: "none" }}>Learn More <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                            </span>
                        </div>
                    </section>
                </div>
                <div className="col-lg-1 col-sm-0"></div>
                <div className="col-lg-6 col-sm-12 -mt-5">
                    <img src={imageURL} alt="UiImage" className='-mt-5' style={{width:"90%",aspectRatio:"3/2",objectFit:"contain"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;