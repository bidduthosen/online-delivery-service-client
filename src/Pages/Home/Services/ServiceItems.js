import React from 'react';
import { FaCrown, FaDollarSign, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceItems = ({service}) => {
    const  {title, price, img, description, rating} = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl border-2 border-success-500 border-orange-100 hover:border-orange-300">
            <PhotoProvider>
                <PhotoView src={img}>
                <figure><img className='h-32 w-32' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                {title}
                <sub><FaCrown className='text-secondary'></FaCrown> </sub>
                </h2>
                <p className='italic'>{description.slice(0 , 100) + '...'}</p>
                <div className="card-actions justify-end mt-3">
                <div className="badge badge-outline p-3"><FaStar/> <FaStar/> <FaStarHalfAlt className='mr-1'/> {rating}</div>
                <div className="badge badge-outline p-3">Price: <FaDollarSign></FaDollarSign>{price}</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;