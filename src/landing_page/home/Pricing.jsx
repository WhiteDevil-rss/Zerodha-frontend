import React from 'react';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <div className="container mb-5 mt-5 p-4">
            <div className="row p-4">
                <div className="col-lg-5 col-sm-12 mb-5">
                    <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link to="/" style={{textDecoration:"none"}}>See pricing <i className='fa fa-long-arrow-right' aria-hidden="true"></i></Link>
                </div>
                <div className="col-lg-1 col-sm-12"></div>
                <div className="col-lg-6 col-sm-12 mb-5">
                    <div className="row text-center">
                        <div className="col-lg-4 col-sm-12 p-3 border border-black border-opacity-50">
                            <h1 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>0</h1>
                            <p>Free account opening</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 p-3 border border-black border-opacity-50">
                            <h1 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-lg-4 col-sm-12 p-3 border border-black border-opacity-50">
                            <h1 className='mb-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;