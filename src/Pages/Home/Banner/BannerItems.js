import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BannerItems = ({slider}) => {
    const {image, id , prev, next} = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-8">
            <div className='carousel-img '>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4"><FaArrowLeft/></a> 
                <a href={`#slide${next}`} className="btn btn-circle"><FaArrowRight/></a>
            </div>
            
            <div className="absolute flex justify-end transform -translate-y-1/2 left-32 top-3/4">
                <div className="form-control">
                    <label className="input-group">
                        <span className='bg-secondary'>Search</span>
                        <input type="text" placeholder="Search your service" className="input input-bordered border-secondary" />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BannerItems;