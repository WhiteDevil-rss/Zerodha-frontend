import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className='container-fluid' style={{ backgroundColor: "#397DD1", color: "white" }}>
            <div className="container">
                <div className="row p-5">
                    <div className="d-flex justify-content-between px-5 lh-lg">
                        <h4 className='text-12'>Support Portal</h4>
                        <Link to="/support" className='text-white'>Track tickets</Link>
                    </div>
                </div>
                <div className="row px-4 mx-5">
                    <div className="col-lg-7 col-sm-12">
                        <h4 className='lh-lg fw-normal'>Search for an answer or browse help topics to create a ticket</h4>
                        <form action="/">
                            <div class="input-group mb-3 mt-3">
                                <input type="text" className="form-control form-control-lg" style={{ fontSize: "16px", lineHeight: "36px" }} placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" autoFocus />
                                <span class="input-group-text" id="inputGroup-sizing-lg"><button type='submit' style={{ border: "none" }}><i class="fa-solid fa-magnifying-glass fa-lg"></i></button></span>
                            </div>
                        </form>
                        <div class="row mb-5">
                            <Link to="/support" className='text-white col-lg-4 col-sm-12 lh-lg'><p>Track account opening</p></Link>
                            <Link to="/support" className='text-white col-lg-4 col-sm-12 lh-lg'><p>Track segment activation</p></Link>
                            <Link to="/support" className='text-white col-lg-4 col-sm-12 lh-lg'><p>Intraday margins</p></Link>
                            <Link to="/support" className='text-white col-lg-4 col-sm-12 lh-lg mb-5'><p>Kite user manual</p></Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <section className='ms-3'>
                            <h4 className='mt-5'>Featured</h4>
                            <ol className='lh-l'>
                                <li className='m-2'>
                                    <Link to="/support" className='text-white col-lg-4 col-sm-12 lh-lg'>Surveillance measure on scrips - August 2024</Link>
                                </li>
                                <li className='m-2'>
                                    <Link to="/support" className='text-white col-lg-4 col-sm-12 lh-lg'>Latest Intraday leverages and Square-off timings</Link>
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;