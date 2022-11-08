import React from 'react';
import { FaCrown, FaDollarSign, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const  {title, price, img, description, rating} = serviceDetails;
    return (
        <div className="card w-full bg-base-100 shadow-xl border-2 border-success-500">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                <sub><FaCrown className='text-secondary'></FaCrown> </sub>
                </h2>
                <p className='italic'>{description}</p>
                <div className="card-actions justify-end mt-3">
                <div className="badge badge-outline p-3"><FaStar/> <FaStar/> <FaStarHalfAlt className='mr-1'/> {rating}</div>
                <div className="badge badge-outline p-3">Price: <FaDollarSign></FaDollarSign>{price}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;