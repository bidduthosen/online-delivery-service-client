import React from 'react';
import { FaClock, FaUserAlt } from 'react-icons/fa';

const ServiceShow = () => {
    return (
        <div className='grid grid-cols-4 gap-4 mx-4 my-20'>
            <div className=''>
                <h2 className='text-black font-bold md:text-3xl text-center w-1/2 mx-auto'>Service shows good taste.</h2>
            </div>
            <div className='col-span-3'>
                <div className="stats shadow w-full">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaClock className="inline-block w-8 h-8 stroke-current"></FaClock>
                        </div>
                        <div className="stat-title">Service Time</div>
                        <div className="stat-value">24 Hour</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserAlt className="inline-block w-8 h-8 stroke-current" />
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceShow;